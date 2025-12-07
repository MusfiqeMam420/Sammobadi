import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // -------------------------------
    // 📌 VALIDATION
    // -------------------------------
    if (!body.firstName || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // -------------------------------
    // 📌 ADMIN EMAIL TEMPLATE
    // -------------------------------
    const adminHtml = `
      <div style="font-family:Arial, sans-serif;">
        <h2>📩 New Project Inquiry</h2>
        <p>You have a new project message from <b>${body.firstName} ${body.lastName}</b></p>

        <p><b>Email:</b> ${body.email}</p>
        <p><b>Budget:</b> ${body.budget}</p>
        <p><b>Services:</b> ${body.services.join(", ")}</p>

        <h3>Message:</h3>
        <p>${body.message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // -------------------------------
    // 📌 USER AUTO-REPLY TEMPLATE
    // -------------------------------
    const userHtml = `
<div style="margin:0;padding:0;background:#ffffff;
font-family:'Poppins', sans-serif;">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <div style="max-width:620px;margin:auto;padding:40px 30px 20px 30px;
  font-family:'Poppins', sans-serif;">

    <div style="text-align:center;margin-bottom:30px;">
    <a href="https://sammobadi.com/">
      <img 
        src="https://cdn.jsdelivr.net/gh/MusfiqeMam420/files@main/logo%201.png"
        alt="Sammobadi Logo"
        style="width:70px;height:auto;"
      />
      </a>
    </div>

    <h2 style="color:#2D6BDF;font-size:22px;margin:0 0 14px;font-weight:600;
    font-family:'Poppins', sans-serif;">
      Thank you for getting in touch, ${body.firstName}!
    </h2>

    <p style="font-size:15px;color:#333;line-height:1.7;margin-bottom:16px;
    font-family:'Poppins', sans-serif;">
      We truly appreciate you reaching out to <strong>Sammobadi</strong>.
      Your project inquiry has been received successfully, and our team is currently reviewing your details.
      You can expect a personal response from us within the next <strong>24 hours</strong>.
    </p>

    <h3 style="font-size:16px;color:#000;margin:28px 0 10px;font-weight:600;
    font-family:'Poppins', sans-serif;">
      Project Summary
    </h3>

    <div style="
      background:#fafafa;
      padding:18px 22px;
      border-radius:12px;
      border:2px dashed #e1e1e1;
      font-size:15px;
      color:#444;
      line-height:1.6;
      font-family:'Poppins',Arial,sans-serif;
    ">
      <p style="margin:0 0 10px;">
        <strong>Services:</strong> ${body.services.join(", ")}
      </p>
      <p style="margin:0;">
        <strong>Budget:</strong> ${body.budget}
      </p>
    </div>

    <p style="margin-top:30px;font-size:15px;color:#444;line-height:1.7;
    font-family:'Poppins',Arial,sans-serif;">
      Our mission is to bring clarity, creativity, and world-class design to every project.
      We're excited to explore how we can collaborate and bring your vision to life.
    </p>

    <p style="margin-top:25px;font-size:14px;color:#444;
    font-family:'Poppins',Arial,sans-serif;">
      Warm regards,<br>
      <strong>The Sammobadi Team</strong>
    </p>

    <div style="margin:35px 0;border-top:1px solid #e5e5e5;"></div>

    <div style="display:flex;align-items:center;justify-content:space-between;">
      <a href="https://sammobadi.com/">
      <img 
        src="https://cdn.jsdelivr.net/gh/MusfiqeMam420/files@main/footer-logo.png"
        alt="Sammobadi Footer Logo"
        style="width:150px;height:auto;"
      />
      </a>
    </div>

    <div style="display:none !important;">anti-clip-${Date.now()}</div>

  </div>
</div>
`;

    // -------------------------------
    // 📌 GMAIL SMTP — CORRECT CONFIG FOR PORT 587
    // -------------------------------
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,        // <-- MUST be false for 587
  requireTLS: true,     // <-- FORCE starttls
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
  tls: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: false
  }
});
    // -------------------------------
    // 📌 SEND TO ADMIN
    // -------------------------------
    await transporter.sendMail({
      from: `"Sammobadi" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Project Inquiry from ${body.firstName}`,
      html: adminHtml,
    });

    // -------------------------------
    // 📌 SEND AUTO-REPLY TO USER
    // -------------------------------
    await transporter.sendMail({
      from: `"Sammobadi" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: "We received your message !",
      html: userHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("❌ Email send error:", err);
    return new Response(
      JSON.stringify({ success: false, error: String(err) }),
      { status: 500 }
    );
  }
}
