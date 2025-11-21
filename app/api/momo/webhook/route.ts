import baseUrl from "@/lib/baseUrl";
import { NextResponse } from "next/server";

export interface CheckoutSessionPayload {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      description?: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
  mode: "payment";
  success_url: string;
  cancel_url: string;
  metadata: {
    courseId: string;
    userId: string;
  };
}

export async function POST(req: Request) {
  try {
    console.log("MOMO API CALL");
    const body: CheckoutSessionPayload = await req.json();
    console.log(body);

    const accessKey = "F8BBA842ECF85";
    const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    const partnerCode = "MOMO";
    const requestType = "payWithMethod";
    const extraData = "";
    const autoCapture = true;
    const lang = "vi";
    const requestId = partnerCode + new Date().getTime();
    const orderId = requestId + "_" + body.metadata.courseId;

    // Build raw signature
    const rawSignature =
      `accessKey=${accessKey}` +
      `&amount=${body.price_data.unit_amount}` +
      `&extraData=${extraData}` +
      `&ipnUrl=${baseUrl}/api/momo/result` +
      `&orderId=${orderId}` +
      `&orderInfo=${body.price_data.product_data.name}` +
      `&partnerCode=${partnerCode}` +
      `&redirectUrl=${body.success_url}` +
      `&requestId=${requestId}` +
      `&requestType=${requestType}`;

    console.log("RAW SIGNATURE:", rawSignature);

    // HMAC SHA256
    const crypto = require("crypto");
    const signature = crypto
      .createHmac("sha256", secretKey)
      .update(rawSignature)
      .digest("hex");

    console.log("SIGNATURE:", signature);

    // Final request payload
    const requestBody = {
      partnerCode,
      partnerName: "Test",
      storeId: "MomoTestStore",
      requestId,
      amount: body.price_data.unit_amount.toString(),
      orderId,
      orderInfo: body.price_data.product_data.name,
      redirectUrl: body.success_url,
      ipnUrl: `${baseUrl}/api/momo/result`,
      lang,
      requestType,
      autoCapture,
      extraData,
      orderGroupId: "",
      signature,
    };

    // Gửi sang MoMo bằng fetch (đơn giản hơn https.request)
    const momoRes = await fetch(
      "https://test-payment.momo.vn/v2/gateway/api/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    const momoData = await momoRes.json();
    console.log("MoMo Response OK:", momoData);

    return NextResponse.json(
      {
        message: "Created MoMo payment",
        result: momoData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in momo webhook handler:", error);
    return new NextResponse("Momo webhook handler failed", { status: 500 });
  }
}
