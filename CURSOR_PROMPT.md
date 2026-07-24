# Cursor Composer prompt (Case Study 2)

```text
Read `.cursorrules` in the project root carefully (team guardrails + this lab's §4).

Inspect `src/routes/bookings.ts`. It currently runs raw `db.query(...)`
calls inside the Express handlers and does not validate the POST body.
That violates §2 and §4.

Refactor to follow the rules:
1. Create `src/repositories/BookingRepository.ts` — all DB access lives there.
2. Create a Zod schema in `src/schemas/` for creating a booking (DTO).
3. Keep route handlers thin: parse → repository → response.
4. Do not put business/DB logic in the handler.
5. Run `npm run typecheck` and `npm run lint`; fix anything that fails.

Keep the same HTTP paths (`/api/bookings`). Use HTTP 400 for invalid bodies.
```
