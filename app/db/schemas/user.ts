import { sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").default(sql`NOW()`),
});
