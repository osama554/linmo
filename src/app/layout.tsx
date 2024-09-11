import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LINMO - Sports & Wellness",
  description: "LINMO - Sports & Wellness Life in Moviment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="box-border mx-auto my-0 max-w-1440 font-inter antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}
