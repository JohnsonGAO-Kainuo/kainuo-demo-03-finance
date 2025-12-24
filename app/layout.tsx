import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vault Capital | Wealth Management & Investment Advisory",
  description: "Data-driven investment strategies tailored to your financial goals. Trusted by 5,000+ investors with average annual return of 12.4%.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
