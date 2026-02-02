import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-balance">Get In Touch</h2>
        <Card className="p-8 md:p-12">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborations, and speaking engagements.
              Whether you're looking for technical leadership, consulting services, or just want to discuss the latest
              in computer engineering, feel free to reach out.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:sarah.chen@example.com"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      nerdydirtyit@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco Bay Area, CA</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/sarahchen</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">github.com/sarahchen</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </div>
        </Card>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Dr. Sarah Chen. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
