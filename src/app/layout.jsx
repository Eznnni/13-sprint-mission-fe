import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/Pretendard-Regular.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "판다마켓 | 믿을 수 있는 중고 거래",
  description: "일상의 모든 물건을 거래해보세요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="font-sans">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
