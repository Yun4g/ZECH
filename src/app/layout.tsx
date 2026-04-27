import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ZECH OIL AND GAS ",
  description: "Zech Oil and Gas",
    icons: {
    icon: "/zoilLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
