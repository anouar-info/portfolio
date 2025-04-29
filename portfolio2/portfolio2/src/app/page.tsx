// src/app/page.tsx

import Hero from "@/components/Hero";
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Blogs />
      <Projects />
    </>
  );
}
