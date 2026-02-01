import { Card } from "@/components/ui/card"
import { FileText, Award } from "lucide-react"

const publications = [
  {
    title: "Fault-Tolerant Design Patterns for Mission-Critical Embedded Systems",
    venue: "IEEE Transactions on Computers",
    year: "2023",
    citations: 156,
  },
  {
    title: "Optimizing Real-Time Performance in Multi-Core Embedded Platforms",
    venue: "ACM SIGBED Review",
    year: "2022",
    citations: 203,
  },
  {
    title: "Hardware-Software Co-Design for Low-Power IoT Devices",
    venue: "International Conference on Embedded Systems",
    year: "2021",
    citations: 178,
  },
  {
    title: "Scalable Architecture for High-Throughput Data Processing",
    venue: "USENIX Annual Technical Conference",
    year: "2020",
    citations: 312,
  },
]

const awards = [
  "IEEE Fellow (2022)",
  "ACM Distinguished Engineer (2019)",
  "Women in Technology Leadership Award (2018)",
  "Best Paper Award - RTAS Conference (2016)",
]

export function Publications() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-balance">Publications & Recognition</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Selected Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-balance">{pub.title}</h4>
                    <p className="text-muted-foreground">
                      {pub.venue} • {pub.year}
                    </p>
                    <p className="text-sm text-muted-foreground">{pub.citations} citations</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Awards & Honors
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-4">
                  <p className="font-medium">{award}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
