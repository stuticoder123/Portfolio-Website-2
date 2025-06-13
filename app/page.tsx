import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Download,
  Calendar,
  Users,
  Code,
  Star,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import AnimatedText from "@/components/animated-text"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedSection from "@/components/animated-section"
import TestimonialCard from "@/components/testimonial-card"
import TimelineItem from "@/components/timeline-item"
import BlogCard from "@/components/blog-card"
import StatCard from "@/components/stat-card"
import ParticlesBackground from "@/components/particles-background"
import FloatingElements from "@/components/floating-elements"
import GradientBlob from "@/components/gradient-blob"
import MagneticButton from "@/components/magnetic-button"
import ScrollProgress from "@/components/scroll-progress"
import CosmicBackground from "@/components/cosmic-background"
import EnhancedCosmicAura from "@/components/enhanced-cosmic-aura"
import EnhancedCursor from "@/components/enhanced-cursor"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <ParticlesBackground />
      <FloatingElements />
      <ScrollProgress />
      <EnhancedCursor />
      <ScrollIndicator />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
            <div className="relative h-10 w-10 bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center text-primary-foreground rounded-xl transition-all duration-500 group-hover:rounded-2xl group-hover:scale-110 shadow-lg group-hover:shadow-xl">
              <span className="font-bold text-sm">SG</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Skills", "Experience", "Blog", "Testimonials", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton>
              <Button
                className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                asChild
              >
                <Link href="/resume/StutiGupta_Resume.pdf" download="StutiGupta_Resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-32 md:py-40 flex flex-col items-center justify-center text-center relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="/placeholder.svg?height=1080&width=1920&text=Modern+Workspace"
              alt="Modern workspace background"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/20"></div>
          </div>
        </div>

        <GradientBlob className="absolute top-20 left-20" />
        <GradientBlob className="absolute bottom-20 right-20" delay={2} />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          <div className="relative">
            {/* Enhanced cosmic aura around the badge */}
            <EnhancedCosmicAura />

            {/* Cosmic background halo around the badge */}
            <div className="absolute -inset-8 rounded-full overflow-hidden">
              <CosmicBackground />
            </div>

            {/* Clean badge without background interference */}
            <div className="relative inline-flex items-center gap-4 rounded-full border-2 border-primary/40 px-10 py-5 text-lg backdrop-blur-md shadow-2xl bg-background/95">
              <Sparkles className="h-7 w-7 text-primary animate-spin relative z-10 drop-shadow-lg" />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold relative z-10 text-2xl tracking-wide drop-shadow-sm">
                Full Stack Developer
              </span>
              <Zap className="h-7 w-7 text-purple-500 animate-bounce relative z-10 drop-shadow-lg" />
            </div>
          </div>

          <AnimatedText
              text="Crafting   Digital   Experiences   That   Inspire   &   Engage"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          />

          <div className="relative">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-semibold">
                accessible
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                responsive
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent font-semibold">
                performant
              </span>{" "}
              web applications using modern technologies that solve real-world problems and deliver exceptional user
              experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <MagneticButton>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg px-8 py-6 rounded-xl"
                asChild
              >
                <Link href="#projects">
                  <Sparkles className="mr-2 h-5 w-5" />
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
                asChild
              >
                <Link href="#contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/stuticoder123", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/stuticoder1/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/stuticoder123", label: "Twitter" },
              { icon: Mail, href: "mailto:stuticoder123@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label}>
                <Link
                  href={href}
                  className="group relative p-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6 text-primary group-hover:text-purple-500 transition-colors" />
                  <span className="sr-only">{label}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity blur-lg"></div>
                </Link>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-primary/20 rounded-full blur-xl animate-float-slow"></div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCard icon={<Code />} value={14} label="Projects Completed" />
          <StatCard icon={<Users />} value={9120} label="Community Members" />
          <StatCard icon={<Calendar />} value={500} label="Coding Questions solved" />
          <StatCard icon={<Star />} value={420} label="GitHub Views" />
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                  <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey, I’m a full-stack developer and tech enthusiast passionate about building impactful, user-first web 
                applications.From intuitive UIs to optimized backends, I create solutions that fuse clean design with 
                strong functionality. Whether it's coding scalable systems or leading creative digital outreach, I love 
                turning ideas into experiences that work — beautifully and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10 hover:border-primary/20 transition-colors">
                <h3 className="font-semibold text-lg mb-2 text-primary">Frontend Expertise</h3>
                <p className="text-muted-foreground">
                  React, Next.js, TypeScript, and modern CSS frameworks for creating stunning user interfaces.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="font-semibold text-lg mb-2 text-purple-500">Backend Development</h3>
                <p className="text-muted-foreground">
                  Node.js, Express, databases, and API design for robust server-side applications.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/stuticoder123", color: "hover:text-gray-600" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/stuticoder1/", color: "hover:text-blue-600" },
                  { icon: Twitter, href: "https://x.com/stuticoder123", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:stuticoder123@gmail.com", color: "hover:text-red-500" },
                ].map(({ icon: Icon, href, color }) => (
                  <MagneticButton key={href}>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`rounded-full hover:bg-primary/10 transition-all duration-300 border-primary/20 hover:border-primary/50 hover:scale-110 ${color}`}
                      asChild
                    >
                      <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/10 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-primary/20">
              <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute top-8 -right-8 w-full h-full border-4 border-primary/30 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-purple-500/30 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-50 animate-float"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Featured Projects
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Check out some of my recent work that showcases my skills and expertise in building modern web
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured online store with product management, cart functionality, and secure checkout.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
                featured: true,
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management tool with real-time updates and team collaboration features.",
                tags: ["React", "Firebase", "Redux", "Material UI"],
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website showcasing projects and skills with a modern design.",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
              },
              {
                title: "AI Content Generator",
                description:
                  "An AI-powered application that generates high-quality content for blogs and social media.",
                tags: ["Python", "OpenAI", "React", "FastAPI"],
              },
              {
                title: "Real-time Chat Application",
                description:
                  "A real-time messaging platform with features like typing indicators, read receipts, and file sharing.",
                tags: ["Socket.io", "Node.js", "Express", "MongoDB"],
              },
              {
                title: "Fitness Tracking Dashboard",
                description:
                  "A comprehensive dashboard for tracking workouts, nutrition, and progress with data visualization.",
                tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
              },
            ].map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image="/placeholder.svg?height=400&width=600"
                demoUrl="#"
                codeUrl="#"
                featured={project.featured}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <MagneticButton>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg px-8 py-4 rounded-xl"
                asChild
              >
                <Link href="#">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Skills & Technologies
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              I work with a variety of technologies across the full stack to build modern web applications
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Frontend Development",
                skills: [
                  { name: "JavaScript", icon: "js" },
                  { name: "TypeScript", icon: "ts" },
                  { name: "React", icon: "react" },
                  { name: "Next.js", icon: "nextjs" },
                  { name: "Tailwind CSS", icon: "tailwind" },
                  { name: "HTML5", icon: "html" },
                  { name: "CSS3", icon: "css" },
                  { name: "Redux", icon: "redux" },
                ],
              },
              {
                title: "Backend Development",
                skills: [
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Express", icon: "express" },
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "PostgreSQL", icon: "postgresql" },
                  { name: "GraphQL", icon: "graphql" },
                  { name: "REST API", icon: "api" },
                  { name: "Firebase", icon: "firebase" },
                  { name: "Prisma", icon: "prisma" },
                ],
              },
              {
                title: "Tools & Others",
                skills: [
                  { name: "Git", icon: "git" },
                  { name: "Docker", icon: "docker" },
                  { name: "AWS", icon: "aws" },
                  { name: "Figma", icon: "figma" },
                  { name: "Jest", icon: "jest" },
                  { name: "CI/CD", icon: "cicd" },
                  { name: "Webpack", icon: "webpack" },
                  { name: "Vercel", icon: "vercel" },
                ],
              },
            ].map((category, categoryIndex) => (
              <div key={category.title} className="space-y-8">
                <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      index={categoryIndex * 8 + skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Work Experience
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              My professional journey and career highlights
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full shadow-lg"></div>

            <div className="space-y-16">
              {[
                {
                  year: "2022 - Present",
                  title: "Senior Frontend Developer",
                  company: "Tech Innovations Inc.",
                  description:
                    "Lead the frontend development team in building responsive and accessible web applications. Implemented modern frontend architecture using React and Next.js. Improved performance metrics by 40%.",
                  side: "right" as const,
                },
                {
                  year: "2020 - 2022",
                  title: "Full Stack Developer",
                  company: "Digital Solutions Ltd.",
                  description:
                    "Developed full-stack applications using the MERN stack. Implemented RESTful APIs and integrated third-party services. Collaborated with UX/UI designers to implement responsive designs.",
                  side: "left" as const,
                },
                {
                  year: "2018 - 2020",
                  title: "Web Developer",
                  company: "Creative Web Agency",
                  description:
                    "Built responsive websites for clients across various industries. Worked with WordPress, HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect designs.",
                  side: "right" as const,
                },
                {
                  year: "2017 - 2018",
                  title: "Junior Developer",
                  company: "StartUp Ventures",
                  description:
                    "Assisted in developing web applications using React. Participated in code reviews and implemented feedback. Learned about agile development methodologies.",
                  side: "left" as const,
                },
              ].map((item, index) => (
                <TimelineItem key={item.year} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection id="blog" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Latest Articles
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Thoughts, insights, and tutorials on web development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building Accessible Web Applications",
                excerpt:
                  "Learn how to make your web applications accessible to all users, including those with disabilities.",
                date: "June 15, 2023",
                category: "Accessibility",
              },
              {
                title: "The Future of React: What's Coming in React 19",
                excerpt:
                  "Explore the upcoming features and improvements in React 19 and how they will change the way we build applications.",
                date: "May 28, 2023",
                category: "React",
              },
              {
                title: "Optimizing Performance in Next.js Applications",
                excerpt: "Practical tips and techniques for improving the performance of your Next.js applications.",
                date: "April 10, 2023",
                category: "Performance",
              },
            ].map((article, index) => (
              <BlogCard
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                image="/placeholder.svg?height=300&width=500"
                url="#"
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <MagneticButton>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg px-8 py-4 rounded-xl"
                asChild
              >
                <Link href="#">
                  View All Articles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Client Testimonials
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              What clients and colleagues say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations with their attention to detail and creative solutions.",
                author: "Sarah Johnson",
                position: "CEO, TechStart",
                rating: 5,
              },
              {
                quote:
                  "An exceptional developer who truly understands both the technical and business aspects of a project. Their work has significantly improved our user engagement and conversion rates.",
                author: "Michael Chen",
                position: "Marketing Director, GrowthLabs",
                rating: 5,
              },
              {
                quote:
                  "I was impressed by their ability to translate our complex requirements into a user-friendly interface. Their technical expertise and communication skills made the project run smoothly.",
                author: "Emily Rodriguez",
                position: "Product Manager, InnovateCorp",
                rating: 5,
              },
              {
                quote:
                  "Not only did they deliver a beautiful website, but they also provided valuable insights that helped us improve our overall digital strategy. Highly recommended!",
                author: "David Thompson",
                position: "Founder, CreativeDesign",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                image="/placeholder.svg?height=100&width=100"
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                  <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new
                opportunities and interesting ideas.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "stutigupta@example.com", href: "mailto:stutigupta@example.com" },
                {
                  icon: Linkedin,
                  text: "linkedin.com/in/stuticoder1",
                  href: "https://www.linkedin.com/in/stuticoder1/",
                },
                { icon: Github, text: "github.com/username", href: "https://github.com" },
              ].map(({ icon: Icon, text, href }) => (
                <MagneticButton key={text}>
                  <Link
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors">{text}</span>
                  </Link>
                </MagneticButton>
              ))}
            </div>

            <div className="pt-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a startup looking to build your first product, or an established company wanting to
                  modernize your digital presence, I'm here to help bring your vision to life with cutting-edge
                  technology and thoughtful design.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-16 relative overflow-hidden">
        <div className="container flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center gap-3 font-bold text-xl mb-6 md:mb-0 group">
            <div className="relative h-10 w-10 bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center text-primary-foreground rounded-xl transition-all duration-500 group-hover:rounded-2xl group-hover:scale-110 shadow-lg">
              <span className="font-bold text-sm">SG</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-500" /> and lots of coffee.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/stuticoder1/" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:stutigupta@example.com" },
              ].map(({ icon: Icon, href }) => (
                <MagneticButton key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced floating shapes */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </footer>
    </div>
  )
}
