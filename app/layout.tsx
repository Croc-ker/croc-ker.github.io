import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Croc-ker — Developer & Designer",
  description:
    "The personal portfolio of Croc-ker — building thoughtful digital experiences for the web.",
  metadataBase: new URL("https://croc-ker.github.io"),
  openGraph: {
    title: "Croc-ker — Developer & Designer",
    description:
      "Building thoughtful digital experiences for the web. Take a look at selected work and say hello.",
    url: "https://croc-ker.github.io",
    siteName: "Croc-ker",
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
