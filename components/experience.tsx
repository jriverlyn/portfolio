import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Chief Technology Officer",
    company: "TechVision Systems",
    period: "2018 - Present",
    description:
      "Leading technology strategy and engineering teams of 150+ engineers. Architected cloud-native infrastructure serving 50M+ users globally.",
    achievements: [
      "Reduced infrastructure costs by 40% through optimization",
      "Led digital transformation initiative across the organization",
      "Established engineering best practices and mentorship programs",
    ],
  },
  {
    title: "VP of Engineering",
    company: "DataCore Solutions",
    period: "2012 - 2018",
    description:
      "Managed multiple engineering teams building enterprise data processing systems. Oversaw the development of real-time analytics platform.",
    achievements: [
      "Scaled platform to handle 10B+ events per day",
      "Built high-performance team of 80+ engineers",
      "Implemented DevOps practices reducing deployment time by 75%",
    ],
  },
  {
    title: "Senior Systems Architect",
    company: "Quantum Computing Labs",
    period: "2005 - 2012",
    description:
      "Designed and implemented embedded systems for aerospace and defense applications. Led research initiatives in fault-tolerant computing.",
    achievements: [
      "Developed safety-critical systems for aviation industry",
      "Published 15+ papers in top-tier conferences",
      "Received 3 patents for innovative system designs",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "MicroSystems Inc.",
    period: "2000 - 2005",
    description:
      "Developed real-time operating systems and device drivers for embedded platforms. Contributed to open-source RTOS projects.",
    achievements: [
      "Optimized kernel performance by 60%",
      "Mentored junior engineers and interns",
      "Led migration to modern development practices",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-balance">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
