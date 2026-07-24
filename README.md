# Case Study 2 — Architecture Rules (Cursor + `.cursorrules`)

Tiny **Express + TypeScript** lab: a bookings API that **violates** team architecture on purpose.

**Bug (intentional):** `src/routes/bookings.ts` calls `db.query(...)` inside the route handler and accepts an unvalidated body. `.cursorrules` requires Repository + Zod instead.

## Run

```bash
npm install
npm run dev
```

- Health: http://localhost:4000/health  
- List: http://localhost:4000/api/bookings  

## Fix with Cursor (Composer)

1. Open this folder in Cursor.
2. Read `.cursorrules`.
3. Paste the prompt from `CURSOR_PROMPT.md`.
4. **Human gate:** verify repository boundaries + Zod schemas, then Accept.

## Expected after refactor

| Before | After |
|--------|--------|
| `db.query` in `routes/bookings.ts` | Thin handler |
| No body validation | Zod in `src/schemas/` |
| Empty `src/repositories/` | e.g. `BookingRepository` |

## Reset

See `RESET.md`.
