import { Router } from "express";
import { db } from "../db/mockDb.js";

/**
 * DELIBERATE ARCHITECTURE BUG (Case Study 2)
 *
 * This handler talks to the database directly with raw `db.query(...)`.
 * Team rules in `.cursorrules` forbid that — use a repository + Zod instead.
 *
 * Leave this broken for the Cursor refactor demo.
 */
export const bookingsRouter = Router();

bookingsRouter.get("/", (_req, res) => {
  // ❌ direct DB access in the route
  const bookings = db.query("SELECT * FROM bookings");
  res.json({ bookings });
});

bookingsRouter.get("/:id", (req, res) => {
  // ❌ no validation, direct DB access
  const rows = db.query("SELECT * FROM bookings WHERE id = ?", [req.params.id]);
  if (!rows.length) {
    res.status(404).json({ error: "Booking not found" });
    return;
  }
  res.json({ booking: rows[0] });
});

bookingsRouter.post("/", (req, res) => {
  // ❌ body used raw — no Zod schema
  const userId = req.body.userId;
  const slot = req.body.slot;
  const created = db.query(
    "INSERT INTO bookings (user_id, slot) VALUES (?, ?)",
    [userId, slot],
  );
  res.status(201).json({ booking: created[0] });
});
