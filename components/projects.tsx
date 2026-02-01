import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Real-Time Analytics Engine",
    description:
      "Designed and implemented a distributed analytics platform processing 10B+ events daily with sub-second latency.",
    technologies: ["C++", "Kafka", "Redis", "Kubernetes"],
    impact: "40% cost reduction, 99.99% uptime",
    image: "/data-analytics-dashboard-with-graphs.jpg",
  },
  {
    title: "Embedded Flight Control System",
    description:
      "Developed safety-critical flight control software for commercial aviation, certified to DO-178C standards.",
    technologies: ["C", "RTOS", "Ada", "MISRA"],
    impact: "Deployed in 500+ aircraft worldwide",
    image: "/aircraft-cockpit-avionics-display.jpg",
  },
  {
    title: "Open-Source RTOS Kernel",
    description: "Core contributor to popular open-source real-time operating system used in millions of IoT devices.",
    technologies: ["C", "Assembly", "ARM", "RISC-V"],
    impact: "2M+ downloads, 5K+ GitHub stars",
    image: "/embedded-system-circuit-board-microcontroller.jpg",
  },
  {
    title: "Cloud Infrastructure Platform",
    description:
      "Architected multi-region cloud platform serving 50M+ users with automatic scaling and disaster recovery.",
    technologies: ["Go", "Terraform", "AWS", "Docker"],
    impact: "Supports $500M+ annual revenue",
    image: "/cloud-computing-data-center-servers.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-balance">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm font-medium text-primary">{project.impact}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
