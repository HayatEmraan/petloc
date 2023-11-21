import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import Preline from "@/components/preline/preline";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
