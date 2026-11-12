import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-6 sm:px-10 sm:pt-9 lg:px-16">
      <Navbar />
      <main>
        <Hero />
        <Work />
      </main>
    </div>
  );
}
