import express from "express";
import { bookingsRouter } from "./routes/bookings.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, lab: "cs2-architecture" });
});

app.use("/api/bookings", bookingsRouter);

app.listen(PORT, () => {
  console.log(`CS2 architecture lab listening on http://localhost:${PORT}`);
  console.log("Try: GET /api/bookings  |  POST /api/bookings");
});
