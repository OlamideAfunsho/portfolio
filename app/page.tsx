import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="h-screen flex flex-col px-6 sm:px-32 py-6 sm:py-9">
      <Navbar />
      <Hero />
    
    <Work />
    <Experience />
    </div>
    </>
  );
}
