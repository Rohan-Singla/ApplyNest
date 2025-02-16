import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/nextauthProvder";
import { getSession } from "@/auth"
import { UserProvider } from "@/contexts/userContext";

const geistSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ApplyNest - By Rohan Singla",
  description: "A Tool to Manage and Organize your Job Search",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Providers session={session}>
          <UserProvider>
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
