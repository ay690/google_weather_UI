import Search from "@/components/Search";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}
