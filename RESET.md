# Reset after a successful Cursor refactor

```bash
git checkout -- src/routes/bookings.ts
rm -f src/repositories/BookingRepository.ts src/schemas/*.ts
# keep .gitkeep files
touch src/repositories/.gitkeep src/schemas/.gitkeep
npm run dev
```

Or reset the whole tree:

```bash
git checkout main
git clean -fd src/repositories src/schemas
```
