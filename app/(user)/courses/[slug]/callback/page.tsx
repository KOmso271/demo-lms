"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function CourseCallback() {
  const pathname = usePathname();
  const route = useRouter();
  const query = useSearchParams();

  useEffect(() => {
    if (!query) return route.replace("/");
    // call to api /api/momo/result with query params
    fetch(`/api/momo/result?${query.toString()}`, {
      method: "GET",
    });

    route.replace(pathname.slice(0, pathname.indexOf("/callback")));
  }, [query]);

  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold">Processing your enrollment...</h1>
        {pathname}
        {/* Show all query parameters */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Query Parameters:</h2>
          <ul className="list-disc list-inside">
            {Array.from(query.entries()).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
