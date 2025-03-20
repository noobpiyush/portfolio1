import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-tight"
            >
              AASHNA SHAH
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#vision"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Vision
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soft Skills Solutions by
                  </h1>
                  <h1 className="text-4xl font-serif font-bold tracking-tighter text-primary sm:text-6xl xl:text-7xl/none">
                    AASHNA SHAH
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Empowering individuals to excel with soft skills training.
                    Focusing on communication, emotional intelligence, and
                    teamwork.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#services">
                      Explore Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last h-full">
                <Image
                  src="/aashna.jpg?height=550&width=550"
                  alt="Aashna Shah"
                  width={550}
                  height={900}
                  className="mx-auto rounded-xl object-cover h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Soft Skills Solutions by
                  </h1>
                  <h1 className="text-4xl font-serif font-bold tracking-tighter text-primary sm:text-6xl xl:text-7xl">
                    AASHNA SHAH
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Empowering individuals to excel with soft skills training.
                    Focusing on communication, emotional intelligence, and
                    teamwork.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#services">
                      Explore Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <Image
                  src="/aashna.jpg?height=550&width=550"
                  alt="Aashna Shah"
                  width={550}
                  height={550}
                  className="mx-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
                  ABOUT AASHNA SHAH
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Creating a safe space for you to explore and develop the soft
                  skills essential for personal and professional success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last h-full">
                <Image
                  src="/aashna.jpg?height=550&width=550"
                  alt="Aashna Shah"
                  width={550}
                  height={900}
                  className="mx-auto h-full aspect-square rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold tracking-tighter">
                    Empowering Through Soft Skills
                  </h3>
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    From enhancing communication and emotional intelligence to
                    nurturing creativity and adaptability, I equip you with the
                    tools to thrive in today's fast-paced world.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    I focus on communication, emotional intelligence, and
                    teamwork, with real-world scenarios ensuring success at
                    every step.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild variant="outline">
                    <Link href="#services">
                      Discover My Services{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
                  ABOUT AASHNA SHAH
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Creating a safe space for you to explore and develop the soft
                  skills essential for personal and professional success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="lg:col-span-2 lg:order-first">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold tracking-tighter">
                      Empowering Through Soft Skills
                    </h3>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                      From enhancing communication and emotional intelligence to
                      nurturing creativity and adaptability, I equip you with
                      the tools to thrive in today's fast-paced world.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                      I focus on communication, emotional intelligence, and
                      teamwork, with real-world scenarios ensuring success at
                      every step.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild variant="outline">
                      <Link href="#services">
                        Discover My Services{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <Image
                  src="/aashna.jpg?height=550&width=550"
                  alt="Aashna Shah"
                  width={550}
                  height={550}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Vision & Mission Section */}
        <section
          id="vision"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold tracking-tighter">
                    OUR VISION
                  </h3>
                  <p className="text-muted-foreground md:text-lg/relaxed">
                    To equip professionals with vital skills for dynamic
                    workplaces, fostering growth mindsets and effective
                    communication, for impactful careers and relationships.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold tracking-tighter">
                    OUR MISSION
                  </h3>
                  <p className="text-muted-foreground md:text-lg/relaxed">
                    Empowering individuals to excel with soft skills training. I
                    focus on communication, emotional intelligence, and
                    teamwork, with real-world scenarios ensuring success at
                    every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Potential Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
                  HOW DO SOFT SKILLS UNLOCK UNTAPPED POTENTIAL?
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Soft skills are the cornerstone of success across all ages. As
                  the global training market booms, recruiters agree that these
                  qualities are crucial, with 91% emphasizing their importance.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  From childhood to old age, studies show that skills like
                  creativity, collaboration, and emotional intelligence shape
                  future achievements.
                </p>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last h-full">
                <Image
                  src="/aashna.jpg?height=550&width=550"
                  alt="Soft Skills Potential"
                  width={550}
                  height={900}
                  className="mx-auto aspect-square rounded-xl object-cover h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
                  OUR SERVICES
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  AND THEIR UNIQUE OFFERINGS
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">
                    Personality Development & Communication Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    Personality development & communication skills are like the
                    building blocks of your life, they boost your confidence,
                    deepen your connections, open doors in your career, and help
                    you grow as a person. They're the keys to unlocking your
                    true potential and leading a fulfilling life.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">
                    Career Readiness and Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    Equipping yourself with the essential skills and knowledge
                    is the first step towards achieving success in your career.
                    Our Career Readiness & Management program provides you with
                    the tools and resources needed to thrive in today's
                    competitive job market.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center h-full md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">
                    Leadership and Team Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    Leadership and team management are the backbone of your
                    professional path. Building them is like laying the
                    foundation for a sturdy bridge, connecting you to success,
                    fostering collaboration, and empowering you to navigate any
                    challenge with confidence and grace.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
                  SEE HOW OUR SERVICES CAN ALIGN WITH
                </h2>
                <p className="max-w-[900px] text-primary font-bold md:text-xl/relaxed">
                  YOUR GOALS AND DRIVE SUCCESS
                </p>
              </div>
            </div>

            <div className="space-y-16">
              {/* Personality Development */}
              <div>
                <h3 className="text-2xl font-serif font-bold tracking-tighter mb-8 text-center">
                  PERSONALITY DEVELOPMENT AND SOFT SKILLS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    "Body Talk (Grooming)",
                    "Communication Skills",
                    "Personality Development",
                    "Etiquette Mapping",
                    "Emotional Intelligence and Empathy",
                  ].map((item) => (
                    <Card
                      key={item}
                      className="flex flex-col items-center justify-center text-center h-full p-4"
                    >
                      <CardContent className="p-2">
                        <p className="font-medium">{item}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-2xl font-serif font-bold tracking-tighter mb-8 text-center">
                  LEADERSHIP & TEAM MANAGEMENT
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Team Management & Interpersonal Skills",
                    "Leadership Skills",
                    "People Skills",
                  ].map((item) => (
                    <Card
                      key={item}
                      className="flex flex-col items-center justify-center text-center h-full p-4"
                    >
                      <CardContent className="p-2">
                        <p className="font-medium">{item}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Career Readiness */}
              <div>
                <h3 className="text-2xl font-serif font-bold tracking-tighter mb-8 text-center">
                  CAREER READINESS & MANAGEMENT
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Interview Ready",
                    "Get Set Goals and Goal Setting",
                    "Conflict Management",
                    "Stress and Time Management",
                  ].map((item) => (
                    <Card
                      key={item}
                      className="flex flex-col items-center justify-center text-center h-full p-4"
                    >
                      <CardContent className="p-2">
                        <p className="font-medium">{item}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Contact us to get more info:
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:aashnashah4@gmail.com"
                    className="text-primary hover:underline"
                  >
                    aashnashah4@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+919820427799"
                    className="text-primary hover:underline"
                  >
                    +91 98204 27799
                  </a>
                </div>
              </div>
              <div className="w-full max-w-md space-y-2">
                <ContactForm  />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Aashna Shah. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
