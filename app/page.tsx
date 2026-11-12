import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 py-6 sm:px-10 sm:py-9 lg:px-16">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
    </div>
  );
}
