import "./globals.css";

export const metadata = {
  title: "Vick’s Cakes & Pastries",
  description: "Freshly baked happiness, every day 🍰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}