import Header from "@/components/Header";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Header />
      <Search />
    </main>
  );
}
