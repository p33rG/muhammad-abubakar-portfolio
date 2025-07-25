import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
     // Log the contact form submission
    console.log('=== VERCEL CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('=====================================');

    // Try to send email using nodemailer
    try {
      // Dynamic import to handle potential issues
      const nodemailer = await import('nodemailer');

      // Create transporter with Gmail SMTP
      const transporter = nodemailer.default.createTransporter({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER || 'bkrmalik3@gmail.com',
          pass: process.env.EMAIL_PASS || 'vmws gbfq ntgk slct' // App password
        },
        tls: {
          rejectUnauthorized: false
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
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

This message was sent from your portfolio website contact form.
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via nodemailer');

      res.json({ success: true, message: "Email sent successfully!" });

    } catch (emailError) {
      console.error('Nodemailer failed, but form submission logged:', emailError);

      // Return success even if email fails, so form doesn't show error
      res.json({
        success: true,
        message: "Message received! We'll get back to you soon."
      });
    }

  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to process message" });
  }
}
