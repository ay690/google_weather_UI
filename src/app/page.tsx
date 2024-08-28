import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Header />
      <Search />
      <Footer />
    </main>
  );
}
