import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@component/Provider";
import TopBar from "@component/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat App",
  description: "A Next.js 14 Chat App ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-2`}>
        <Provider>
          <TopBar/>
          {children}
          </Provider>
      </body>
    </html>
  );
}
