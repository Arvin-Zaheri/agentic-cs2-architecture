import express from "express";
import { bookingsRouter } from "./routes/bookings.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Bookings API</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 640px; margin: 48px auto; padding: 0 16px; color: #14212b; background: #f7f9fa; }
    main { background: #fff; border: 1px solid #d5e0e6; border-radius: 12px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(20,33,43,.06); }
    h1 { margin: 0 0 8px; font-size: 1.6rem; }
    p { color: #4b5c66; line-height: 1.5; }
    code { background: #eef2f4; padding: 2px 6px; border-radius: 4px; font-size: 0.95em; }
    a { color: #0f6e56; font-weight: 600; }
    ul { line-height: 1.9; padding-left: 1.2rem; }
  </style>
</head>
<body>
  <main>
    <h1>Bookings API</h1>
    <p>Internal scheduling service. Use the endpoints below to list and create bookings.</p>
    <ul>
      <li><a href="/health">GET /health</a> — service status</li>
      <li><a href="/api/bookings">GET /api/bookings</a> — list bookings</li>
      <li><code>POST /api/bookings</code> — create booking (<code>userId</code>, <code>slot</code>)</li>
    </ul>
  </main>
</body>
</html>`);
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "bookings-api" });
});

app.use("/api/bookings", bookingsRouter);

app.listen(PORT, () => {
  console.log(`Bookings API listening on http://localhost:${PORT}`);
  console.log("Try: GET /api/bookings  |  POST /api/bookings");
});
