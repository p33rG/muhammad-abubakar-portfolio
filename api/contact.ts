import { RequestHandler } from "express";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // For development - just log the message and return success
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("===============================");

    // In development, just return success without sending email
    // Email functionality will work on Vercel deployment
    res.json({
      success: true,
      message: "Message received successfully! (Development mode - check server logs)"
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to process message" });
  }
};
