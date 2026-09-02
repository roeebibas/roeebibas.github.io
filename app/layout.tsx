import type { Metadata } from "next";
import "@fontsource/big-shoulders-display/latin-400";
import "@fontsource/big-shoulders-display/latin-500";
import "@fontsource/big-shoulders-display/latin-600";
import "@fontsource/big-shoulders-display/latin-700";
import "@fontsource/big-shoulders-display/latin-800";
import "@fontsource/nunito-sans/latin-400";
import "@fontsource/nunito-sans/latin-500";
import "@fontsource/nunito-sans/latin-600";
import "@fontsource/nunito-sans/latin-700";
import "@fontsource/nunito-sans/latin-800";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roee Bibas | Art Director & Senior Brand and Web Designer",
  description:
    "Portfolio of Roee Bibas, an Art Director and multidisciplinary designer specializing in brand systems, web, UX/UI, AI-assisted creative operations and SEO content.",
  verification: {
    google: "lxSMILO_o_JR1DL9cD4vazFoFIU20YNCN2pD9BFF8cM",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
