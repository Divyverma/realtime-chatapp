import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "@component/ToasterContext";
import Provider from "@component/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chat time",
    description: "Real time chat app using next js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-purple-1`}>
                <Provider>
                    <ToasterContext />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
