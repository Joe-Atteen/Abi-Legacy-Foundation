import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const credentials = Buffer.from(
      `${process.env.HUBTEL_ACCOUNT}:${process.env.HUBTEL_API_KEY}`
    ).toString("base64");

    const response = await fetch(
      "https://payproxyapi.hubtel.com/items/initiate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify(body),
      }
    );


    const text = await response.text(); // get raw response
    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");

    const data = isJson ? JSON.parse(text) : { raw: text };

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error initiating payment:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
