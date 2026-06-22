import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const pretendard = localFont({
  src: "../fonts/Pretendard-Regular.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="grow pt-17.5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
