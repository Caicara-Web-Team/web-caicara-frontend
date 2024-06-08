import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Caiçara E-Commerce",
  description: "Mostrando o caminho das pedras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body style={{margin:0, padding:0}} className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
