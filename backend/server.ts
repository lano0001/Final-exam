// server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fetch } from "undici";

dotenv.config();

const app = express();

// ✅ Allow CORS from Vercel frontend + localhost
const allowedOrigins = [
  "http://localhost:5173",
  "https://final-exam-vh4f.vercel.app", // replace with your actual Vercel URL
];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Invalid email address" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const DATACENTER = API_KEY.split("-")[1];

  const mailchimpUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    const response = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (![200, 201].includes(response.status)) {
      const error = (await response.json()) as { detail?: string };
      return res
        .status(response.status)
        .json({ message: error.detail || "Unknown error" });
    }

    return res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Optional: health check route
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
