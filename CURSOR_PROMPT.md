# Cursor Composer prompt (Case Study 2)

```text
Read `.cursorrules` in the project root.

Inspect `src/routes/bookings.ts`. It currently runs raw `db.query(...)`
calls inside the Express handlers and does not validate the POST body.

Refactor to follow our team rules:
1. Create `src/repositories/BookingRepository.ts` for all DB access.
2. Create a Zod schema in `src/schemas/` for creating a booking.
3. Keep route handlers thin (parse → repository → response).
4. Run `npm run typecheck` and `npm run lint` and fix any issues.

Do not change the HTTP URLs or response shape unless required for validation errors (use 400 for bad body).
```
