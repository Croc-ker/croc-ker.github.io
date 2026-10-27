import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wyatt Crocker, Software Engineer & Game Developer",
  description:
    "Wyatt Crocker's portfolio.",
  openGraph: {
    title: "Wyatt Crocker, Software Engineer & Game Developer",
    description:
      "hi am wyatt i make things",
    siteName: "Wyatt Crocker",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
