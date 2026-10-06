import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, service, message, honeypot } = body;

    // Honeypot anti-spam check
    if (honeypot) {
      return NextResponse.json(
        { success: false, error: "Yêu cầu bị từ chối do nghi vấn spam." },
        { status: 400 }
      );
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Họ và tên phải có ít nhất 2 ký tự.";
    }

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phone || typeof phone !== "string" || !phoneRegex.test(phone.replace(/\s+/g, ""))) {
      errors.phone = "Số điện thoại không hợp lệ (Ví dụ: 0901 234 567).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      errors.email = "Địa chỉ email không hợp lệ.";
    }

    if (!service || typeof service !== "string" || service.trim().length === 0) {
      errors.service = "Vui lòng chọn lĩnh vực cần tư vấn.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Nội dung yêu cầu phải có ít nhất 10 ký tự để luật sư nắm rõ bối cảnh.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Dữ liệu nhập vào chưa hợp lệ. Vui lòng kiểm tra lại các trường được đánh dấu đỏ.",
          fieldErrors: errors
        },
        { status: 422 }
      );
    }

    // In a live system, this connects to CRM/Email/Database.
    // For this verified production demo, generate reference ticket
    const ticketId = `SLX-${Date.now().toString().slice(-6)}`;
    const receivedAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: "Yêu cầu tư vấn đã được hệ thống SAIGONLEX tiếp nhận thành công.",
      ticketId,
      receivedAt,
      consultantResponseEstimate: "Trong vòng 24 giờ làm việc",
      summary: {
        fullName: fullName.trim(),
        service,
        contactMethod: `Hotline/Zalo theo số ${phone.trim()} & Email ${email.trim()}`
      }
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Đã xảy ra lỗi trong quá trình xử lý yêu cầu. Vui lòng thử lại hoặc gọi trực tiếp Hotline 1900 6868."
      },
      { status: 500 }
    );
  }
}
