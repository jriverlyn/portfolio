import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Expertise } from "@/components/expertise"
import { Projects } from "@/components/projects"
import { Publications } from "@/components/publications"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Projects />
      <Publications />
      <Contact />
    </main>
  )
}
