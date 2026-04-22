import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ họ tên và số điện thoại." }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
       // Mock response if no script URL is provided for testing
       console.warn("GOOGLE_SCRIPT_URL is not defined in .env. Falling back to success for demo.");
       return NextResponse.json({ message: "Success (Demo Mode)" });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });

    const result = await response.json();

    if (result.status === "success") {
      return NextResponse.json({ message: "Success" });
    } else if (result.status === "duplicate") {
      return NextResponse.json({ message: "Số điện thoại này đã được đăng ký nhận voucher trước đó." }, { status: 400 });
    } else {
      return NextResponse.json({ message: result.message || "Lỗi lưu dữ liệu." }, { status: 500 });
    }
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ message: "Lỗi kết nối máy chủ." }, { status: 500 });
  }
}
