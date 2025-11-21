import baseUrl from "@/lib/baseUrl";
import { rateDefault } from "@/lib/formatPrice";
import { createEnrollment } from "@/sanity/lib/student/createEnrollment";
import { getStudentByClerkId } from "@/sanity/lib/student/getStudentByClerkId";
import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";
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

export async function GET(req: Request) {
  try {
    console.log("MOMO Result API CALL");

    const headerList = new URL(req.url);
    const courseId = headerList.searchParams.get("orderId")?.split("_")[1];
    const amount = headerList.searchParams.get("amount");
    const paymentId = headerList.searchParams.get("requestId");

    const authdata = await auth();
    const userId = authdata.userId;

    if (!courseId || !userId || !paymentId || !amount) {
      return new NextResponse("Missing data", { status: 400 });
    }

    const student = await getStudentByClerkId(userId);

    if (!student.data) {
      return new NextResponse("Student not found", { status: 400 });
    }

    await createEnrollment({
      studentId: student.data._id,
      courseId,
      paymentId: paymentId,
      amount: Number(amount) / rateDefault,
    });

    return NextResponse.json(
      {
        message: "Enrollment created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in momo enrollment:", error);
    return new NextResponse("Momo enrollment failed", { status: 500 });
  }
}
