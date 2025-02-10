import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // New column for user's name
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").default(sql`NOW()`),
});
