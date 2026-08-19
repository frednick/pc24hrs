import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://pc24hrs.com"),
  title: "PC24hrs USA | Reliable Remote IT Support for Small Businesses",
  description: "PC24hrs provides fast, practical remote IT support, computer troubleshooting, device setup, Microsoft 365 help, security and business technology support for small businesses.",
  keywords: ["IT support USA", "remote IT support", "small business IT support", "computer troubleshooting", "Microsoft 365 support", "Indiana IT support", "PC24hrs"],
  openGraph: {
    title: "PC24hrs USA | Reliable Remote IT Support",
    description: "Technology problems shouldn't stop your business. Get practical remote IT support from PC24hrs.",
    type: "website",
    siteName: "PC24hrs USA",
  },
  twitter: {
    card: "summary_large_image",
    title: "PC24hrs USA | Remote IT Support",
    description: "Fast, practical technology support for small businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
