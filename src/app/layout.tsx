import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/src/widgets/header";

const ppneuemontreal = localFont({
  src: "../../public/fonts/ppneuemontreal-book.otf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ppneuemontreal.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
