import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow pt-17.5">{children}</main>
      <Footer />
    </div>
  );
}
