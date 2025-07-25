import { RequestHandler } from "express";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // For development - just log the message and return success
    console.log("Contact form submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Try to import and use nodemailer
    try {
      const nodemailer = await import("nodemailer");

      // Create transporter with Gmail SMTP
      const transporter = nodemailer.default.createTransporter({
        service: 'gmail',
        auth: {
          user: 'bkrmalik3@gmail.com',
          pass: 'vmws gbfq ntgk slct' // App password
        }
      });

      // Email content
      const mailOptions = {
        from: email,
        to: 'bkrmalik3@gmail.com',
        subject: `Portfolio Contact Form - Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to bkrmalik3@gmail.com");

    } catch (emailError) {
      console.error("Email sending failed, but form submission logged:", emailError);
      // Continue to return success even if email fails in development
    }

    res.json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to process message" });
  }
};
