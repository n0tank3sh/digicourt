import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Scale, FileText, Video, Bell, BarChart3, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Digital Courtroom</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Modernizing the Indian Judicial System</h2>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive digital solution to address case backlogs, streamline documentation, and improve
            accessibility for all stakeholders.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Secure Authentication"
              description="Multi-tier access control with role-based permissions for judges, lawyers, court staff, and citizens."
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Case Management"
              description="Digital case filing, automated tracking, and intelligent scheduling to reduce backlogs."
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Document Repository"
              description="Centralized storage with advanced search, version control, and secure access."
            />
            <FeatureCard
              icon={<Video className="h-10 w-10 text-primary" />}
              title="Virtual Hearings"
              description="Secure video conferencing with real-time document sharing and AI-assisted transcription."
            />
            <FeatureCard
              icon={<Bell className="h-10 w-10 text-primary" />}
              title="Notification System"
              description="Automated alerts for case updates, upcoming hearings, and legal notices."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-primary" />}
              title="Analytics Dashboard"
              description="Comprehensive reporting on case trends, court efficiency, and resource utilization."
            />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Stakeholder Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StakeholderCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="For Judges"
              benefits={[
                "Streamlined case management",
                "Efficient document access",
                "Reduced administrative burden",
                "Better case scheduling",
              ]}
            />
            <StakeholderCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="For Lawyers"
              benefits={[
                "Easy case tracking",
                "Digital document submission",
                "Virtual hearing options",
                "Automated notifications",
              ]}
            />
            <StakeholderCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="For Court Staff"
              benefits={[
                "Simplified documentation",
                "Automated scheduling",
                "Digital record keeping",
                "Reduced paperwork",
              ]}
            />
            <StakeholderCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="For Citizens"
              benefits={[
                "Transparent case status",
                "Improved accessibility",
                "Faster case resolution",
                "Remote hearing participation",
              ]}
            />
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Scale className="h-6 w-6" />
              <span className="text-xl font-bold">Digital Courtroom</span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="hover:underline">
                About
              </Link>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Digital Courtroom Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    // <Card>
    //   <CardHeader>
    //     <div className="flex justify-center mb-4">{icon}</div>
    //     <CardTitle className="text-center">{title}</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <p className="text-center text-muted-foreground">{description}</p>
    //   </CardContent>
    // </Card>


    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

function StakeholderCard({
  icon,
  title,
  benefits,
}: {
  icon: React.ReactNode
  title: string
  benefits: string[]
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center mb-2">{icon}</div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

