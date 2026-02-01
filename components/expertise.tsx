import { Card } from "@/components/ui/card"
import { Cpu, Network, Database, Code, Shield, Zap } from "lucide-react"

const expertiseAreas = [
  {
    icon: Cpu,
    title: "Systems Architecture",
    skills: ["Distributed Systems", "Microservices", "Cloud Infrastructure", "High Availability Design"],
  },
  {
    icon: Network,
    title: "Embedded Systems",
    skills: ["RTOS Development", "Device Drivers", "Hardware-Software Co-design", "IoT Solutions"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["Real-time Processing", "Big Data Analytics", "Stream Processing", "Data Pipelines"],
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["C/C++", "Python", "Rust", "Go", "Assembly", "VHDL"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Secure Boot", "Cryptography", "Threat Modeling", "Security Audits"],
  },
  {
    icon: Zap,
    title: "Performance",
    skills: ["Optimization", "Profiling", "Benchmarking", "Low-latency Systems"],
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-balance">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
