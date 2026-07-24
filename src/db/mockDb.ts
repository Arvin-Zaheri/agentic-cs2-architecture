/** Tiny in-memory "database" for the architecture demo. */

export type BookingRow = {
  id: number;
  userId: string;
  slot: string;
  status: "pending" | "confirmed" | "cancelled";
};

const rows: BookingRow[] = [
  { id: 1, userId: "u-100", slot: "2026-07-25T10:00:00Z", status: "confirmed" },
  { id: 2, userId: "u-200", slot: "2026-07-25T14:00:00Z", status: "pending" },
];

let nextId = 3;

/** Simulates a raw SQL-style query API (the anti-pattern for handlers). */
export const db = {
  query<T = BookingRow>(sql: string, params: unknown[] = []): T[] {
    console.log("[db.query]", sql, params);

    if (sql.startsWith("SELECT * FROM bookings WHERE id")) {
      const id = Number(params[0]);
      return rows.filter((r) => r.id === id) as T[];
    }

    if (sql.startsWith("SELECT * FROM bookings")) {
      return [...rows] as T[];
    }

    if (sql.startsWith("INSERT INTO bookings")) {
      const [userId, slot] = params as [string, string];
      const row: BookingRow = {
        id: nextId++,
        userId,
        slot,
        status: "pending",
      };
      rows.push(row);
      return [row] as T[];
    }

    throw new Error(`Unsupported SQL in mock db: ${sql}`);
  },
};
