
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import Head from "./head";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ['600']});
export const metadata = {
  title: "NoteyNote",
  description: "NoteTakingApp",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <Head/>
      <AuthProvider>
      <body className={"max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 " + poppins.className}>
        <Header/>
        {children}
      </body>
      </AuthProvider>
    </html>
  );
}
