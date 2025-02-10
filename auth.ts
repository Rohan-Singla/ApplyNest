import GoogleProvider from "next-auth/providers/google";

import { AuthOptions, getServerSession } from "next-auth"
import { db } from "./app/db/drizzle";
import { users } from "./app/db/schemas/user";

const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user }) {
            if (user.name && user.email) {
                try {
                    await db.insert(users).values({
                        name: user.name,   // Now guaranteed to be a string
                        email: user.email, // Now guaranteed to be a string
                    });
                    console.log("User Signed Up Successfully!");
                } catch (error) {
                    console.error("Insertion failed:", error);
                }
            } else {
                console.error("Name and email are required.");
            }
            return true;
        },
    },
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }