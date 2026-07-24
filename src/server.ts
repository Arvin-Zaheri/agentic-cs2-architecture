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
  <title>CS2 Architecture Lab</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 640px; margin: 48px auto; padding: 0 16px; color: #14212b; }
    code { background: #eef2f4; padding: 2px 6px; border-radius: 4px; }
    a { color: #0f6e56; }
    ul { line-height: 1.8; }
  </style>
</head>
<body>
  <h1>Case Study 2 — Architecture Lab</h1>
  <p>API is running. The intentional bug is in <code>src/routes/bookings.ts</code> (direct <code>db.query</code>).</p>
  <ul>
    <li><a href="/health">GET /health</a></li>
    <li><a href="/api/bookings">GET /api/bookings</a></li>
  </ul>
  <p>Open this folder in Cursor and follow <code>CURSOR_PROMPT.md</code>.</p>
</body>
</html>`);
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, lab: "cs2-architecture" });
});

app.use("/api/bookings", bookingsRouter);

app.listen(PORT, () => {
  console.log(`CS2 architecture lab listening on http://localhost:${PORT}`);
  console.log("Try: GET /api/bookings  |  POST /api/bookings");
});
