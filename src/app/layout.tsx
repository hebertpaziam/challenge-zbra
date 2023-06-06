import { ReactNode } from "react";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "ZBra Challenge",
  description: "This is ZBra Challenge developed in Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
