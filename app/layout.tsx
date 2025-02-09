import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  weight:["100","200","300","400","500","600","700","800"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ApplyNest - By Rohan Singla",
  description: "A Tool to Manage and Organize your Job Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
