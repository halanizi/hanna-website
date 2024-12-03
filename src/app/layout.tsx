import type { Metadata } from "next";
import "./styles/globals.css";
import { montserrat, opensans } from "./styles/fonts";

export const metadata: Metadata = {
    title: "Hanna Alanizi",
    description: "Hanna Alanizi's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`h-full ${montserrat.variable} ${opensans.variable} font-sans antialiased`}>{children}</body>
        </html>
    );
}
