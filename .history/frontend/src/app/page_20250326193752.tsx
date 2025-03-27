"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Scale, FileText, Video, Bell, BarChart3, Users } from "lucide-react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import * as THREE from 'three'

import { Canvas } from "@react-three/fiber"
import { Environment, useAnimations, useGLTF} from "@react-three/drei"
import { useRef } from "react"
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  
];

function Model({ url }: { url: string }) {
  const group = useRef<any>(null)
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, group)

  // Track if "hammerUp" animation has played
  const hasPlayedUpRef = useRef(false)

  const handleMouseEnter = () => {
    if (actions && actions["hammerAction"] && !hasPlayedUpRef.current) {
      actions["hammerAction"].reset()
      actions["hammerAction"].setLoop(THREE.LoopOnce, 1) // Play once
      actions["hammerAction"].clampWhenFinished = true  // Stop at last frame
      actions["hammerAction"].play()
      hasPlayedUpRef.current = true
    }
  }

  const handleMouseLeave = () => {
    if (actions && actions["hammerStrike"]) {
      actions["hammerStrike"].reset()
      actions["hammerStrike"].setLoop(THREE.LoopOnce, 1) // Play once
      actions["hammerStrike"].clampWhenFinished = true  // Stop at last frame
      actions["hammerStrike"].play()
      hasPlayedUpRef.current = false // Reset state so next enter plays animation1 again
    }
  }

  return (
    <group
      ref={group}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <primitive object={scene} dispose={null} position={[-3,2]} />
    </group>
  )
}



export default function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm absolute top-0 left-0 w-full">
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

      <main className="container   mx-auto px-4 py-12">
        
        <section className="max-w-4xl h-screen flex  flex-col justify-center items-center mx-auto text-center mb-16">
          <Canvas 
          style={{height: "100vh", width: "100vw",position:"absolute"}}
          className="h-screen w-full ">
            <Environment preset="city" />
            {/* <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="hotpink" />
            </mesh> */}
            <Model url="/models/Gavel.glb" />
          </Canvas>
         
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
          <div>
           <HoverEffect items={projects} />
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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold w-full text-neutral-600 dark:text-white"
        >
          <div className="flex justify-center mb-4">{icon}</div>
          <h1 className="text-3xl w-full text-center">{title}</h1>
        </CardItem>
        <CardItem
          translateZ="100"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        <p className="text-center text-muted-foreground">{description}</p>

        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

