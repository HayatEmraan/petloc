import { Inter } from "next/font/google";
import "./globals.css";
import Preline from "@/components/preline/preline";
import OneContext from "@/security/fb.login";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Petloc | A one-stop solution for the pet owners | Petloc | A one-stop solution for the pet owners",
  description: "Petloc | A one-stop solution for the pet owners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preline />
        <OneContext>{children}</OneContext>
      </body>
    </html>
  );
}
