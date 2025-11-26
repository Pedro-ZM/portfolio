"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Moon,
  Sun,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Code2,
  Folder,
  ArrowUpRight,
  Mail,
  MapPin,
  Calendar,
  Copy,
  Check,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  FileText,
  Heart,
  MousePointer2,
  GraduationCap,
  Award,
  BookOpen,
} from "lucide-react"
import Image from "next/image"


function RevealText({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Translations
const translations = {
  es: {
    nav: {
      projects: "01. Proyectos",
      about: "02. Sobre Mí",
      contact: "03. Contacto",
    },
    hero: {
      greeting: "Hola, mi nombre es",
      name: "Pedro Zarzuela Martin.",
      title: "Desarrollador fullstack especializado en IA y Big Data",
      description:
        "Tecnico en  Desarrollo de Aplicaciones Web especializado en Big Data e Inteligencia Artificial. Apasionado por crear soluciones digitales accesibles y centradas en el usuario.",
      cta: "Ver mi trabajo",
    },
    about: {
      title: "02. Sobre Mí",
      description:
        "Hola!, soy Pedro un desarrollador apasionado por crear soluciones simples y útiles. Me gusta aprender, mejorar cada día y construir proyectos que realmente aporten valor. Disfruto trabajar con buenas prácticas, código claro y ganas de seguir creciendo.",
      techTitle: "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
      education: "Formación",
      educationDesc: "Mi trayectoria académica y certificaciones",
    },
    projects: {
      title: "01. Cosas que he construido",
      viewProject: "Ver Proyecto",
      featured: "Proyecto Destacado",
    },
    contact: {
      title: "03. Qué sigue?",
      subtitle: "Ponerse en Contacto",
      description:
        "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible para responderte!",
    },
  },
  en: {
    nav: {
      projects: "01. Projects",
      about: "02. About",
      contact: "03. Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      name: "Pedro Zarzuela Martin.",
      title: "Front-end developer specialized in AI and Big Data.",
      description:
        "Web Application Development Technician specialized in Big Data and Artificial Intelligence. Passionate about creating accessible, user-centered digital solutions.",
      cta: "Check out my work",
    },
    about: {
      title: "02. About Me",
      description:
        "Hi! I'm Pedro, a developer passionate about creating simple and useful solutions. I enjoy learning, improving every day, and building projects that truly deliver value. I like working with good practices, clean code, and a strong desire to keep growing.",
      techTitle: "Here are a few technologies I've been working with recently:",
      education: "Education",
      educationDesc: "My academic background and certifications",
    },
    projects: {
      title: "01. Things I've Built",
      viewProject: "View Project",
      featured: "Featured Project",
    },
    contact: {
      title: "03. What's Next?",
      subtitle: "Get In Touch",
      description:
        "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    },
  },
}

// Projects data 
const projectsData = [
  {
    title: "Hospital Rewards System",
    descriptionES:
      "Aplicación web full-stack, realizada en colaboración con mi compañero, para gestionar personal hospitalario, mensajería y recompensas. Desarrollé el frontend completo con React y Next.js, implementando interfaz de usuario responsiva, sistema de roles con dashboards personalizados, mensajería en tiempo real con menciones, y sistema de visualización de puntos y recompensas. Desplegada en Netlify con integración continua.",
    descriptionEN:
      "Full-stack web application, develop in collaboration with my partner, for hospital staff management, messaging, and rewards system. Developed the complete frontend using React and Next.js, implementing responsive UI, role-based dashboards, real-time messaging with mentions, and points/rewards visualization system. Deployed on Netlify with continuous integration.",
    tech: ["React", "Next.js", "TypeScript", "Netlify", "GitHub"],
    link: "https://github.com/manulucena12/hospital-rewards",
    image: "/intro.jpeg",
  },

]

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "PHP",
  "Java",
  "MySQL",
  "PostgreSQL",
  "WordPress",
  "Odoo",
  "Git",
  "GitHub",
  "Figma",
  "Jest",
  "Netlify",
  "ESLint",
  "Prettier"
]


const educationData = [
  {
    type: "degree", // "degree" para estudios, "cert" para certificaciones
    titleES: "Titulo de Bachillerrato en modalidad de Ciencias Sociales",
    titleEN: "High School Diploma in Social Sciences",
    institutionES: "IES Virgen de Valme (Sevilla)",
    institutionEN: "IES Virgen de Valme (Sevilla)",
    period: "2021-2023",
    descES: "Fundamentos en economía, empresa y ciencias del comportamiento.",  
    descEN: "Specialization in software development and distributed systems.",

  },
  {
    type: "cert",
    titleES: "Fundamentos de React",
    titleEN: "Fundamentals of React",
    institutionES: "OpenWebinars",
    institutionEN: "OpenWebinars",
    period: "2025",
    descES: "Certificación en desarrollo de aplicaciones web con React.",
    descEN: "Certification in web application development with React.",
    tittle: "/certificado_fundamentos_de_react.pdf"
  },
  {
      type: "cert",
    titleES: "PET CETIFICATE IN ENGLISH",
    titleEN: "PET CETIFICATE IN ENGLISH",
    institutionES: "Cambridge University Press & Assessment",
    institutionEN: "Cambridge University Press & Assessment",
    period: "2022",
    descES: "Certificación en inglés nivel B1, demostrando competencia comunicativa intermedia.",
    descEN: "Certification in English level B1, demonstrating intermediate communicative competence.",
    tittle: "/StatementOfResult.pdf"
  },
  {
    type: "degree",
    titleES: "Técnico Superior en Desarrollo de Aplicaciones Web",
    titleEN: "Higher Technician in Web Application Development",
    institutionES: "Instituto Tecnológico Pablo de la Torre",
    institutionEN: "Instituto Tecnológico Pablo de la Torre",
    period: "2023 - 2025",
    descES: "Especialización en desarrollo, implantación y mantenimiento de aplicaciones web.",
    descEN: "Specialization in development, implementation, and maintenance of web applications   .",
  },
]

export default function Portfolio() {
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("es")
  const [mounted, setMounted] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [emailCopied, setEmailCopied] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [educationFilter, setEducationFilter] = useState("all") // "all", "degree", "cert"
  const fullText = "console.log('Hello, World!');"

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const gradientBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.15), transparent 40%)`,
  )

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "dark"
    const savedLanguage = localStorage.getItem("language") || "es"
    setTheme(savedTheme)
    setLanguage(savedLanguage)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  useEffect(() => {
    if (!mounted) return
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)
    return () => clearInterval(typingInterval)
  }, [mounted])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("pedrozarzumar@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const t = translations[language]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const journeyData = [
{
  titleES: "Prácticas en Departamento de Informática",
  titleEN: "Internship in IT Department",
  company: "Ayuntamiento de Dos Hermanas",
  carta: "/cartaPracticas.pdf",
  period: "03/2025 - 06/2025",
  descES: "Soporte técnico, mantenimiento de equipos, gestión de incidencias informáticas y colaboración en proyectos de digitalización. Demostrada capacidad de aprendizaje, integración con el equipo y gran responsabilidad profesional.",
  descEN: "Technical support, equipment maintenance, IT incident management and collaboration in digitalization projects. Demonstrated learning ability, team integration and high professional responsibility."
}
,
  ]

  const filteredEducation = educationData.filter((item) => {
    if (educationFilter === "all") return true
    return item.type === educationFilter
  })

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground font-mono transition-colors duration-300 selection:bg-primary/30 selection:text-primary">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[9999]" style={{ scaleX }} />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40"
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold text-lg sm:text-xl flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("home")}
          >
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="hidden xs:inline">~/portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-4 xl:gap-6 text-sm">
              {[
                { id: "projects", num: "01", labelES: "Proyectos", labelEN: "Projects" },
                { id: "about", num: "02", labelES: "Sobre Mí", labelEN: "About" },
                { id: "contact", num: "03", labelES: "Contacto", labelEN: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1 relative group"
                >
                  <span className="text-primary mr-1">{item.num}.</span>
                  {language === "es" ? item.labelES : item.labelEN}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-border"></div>

            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: "https://github.com/Pedro-ZM", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-zarzuela-martin-b7b547339/", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="h-9 w-9"
                aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
              >
                <Globe className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
                aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Switch to light mode"}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="h-9 w-9">
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9"
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  {[
                    { id: "projects", num: "01", labelES: "Proyectos", labelEN: "Projects" },
                    { id: "about", num: "02", labelES: "Sobre Mí", labelEN: "About" },
                    { id: "contact", num: "03", labelES: "Contacto", labelEN: "Contact" },
                  ].map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg py-3 px-4 rounded-lg hover:bg-muted transition-colors flex items-center gap-3"
                    >
                      <span className="text-primary text-sm font-mono">{item.num}.</span>
                      {language === "es" ? item.labelES : item.labelEN}
                    </motion.button>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground mb-4 px-4">
                    {language === "es" ? "Encuéntrame en" : "Find me on"}
                  </p>
                  <div className="flex gap-3 px-4">
                    <a
                      href="https://github.com/Pedro-ZM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pedro-zarzuela-martin-b7b547339/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Sidebars fijos */}


      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center pt-16 sm:pt-20 relative overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="absolute inset-0 opacity-30 pointer-events-none hidden md:block"
            style={{ background: gradientBackground }}
          />

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2 }}
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10">
            <RevealText delay={0}>
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-muted/50 rounded-full border border-border text-xs sm:text-sm">
                  <motion.span
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-muted-foreground">
                    {language === "es" ? "Disponible para trabajar" : "Available for work"}
                  </span>
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.1}>
              <p className="text-primary mb-3 sm:mb-4 font-medium tracking-wide flex items-center gap-2 text-sm sm:text-base">
                <ChevronRight className="h-4 w-4" />
                {t.hero.greeting}
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 tracking-tight text-foreground/90 hover:text-primary transition-colors cursor-default">
                {t.hero.name}
              </h1>
            </RevealText>

            <RevealText delay={0.3}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-muted-foreground text-balance">
                {t.hero.title}
              </h2>
            </RevealText>

            <RevealText delay={0.4}>
              <div className="mb-6 sm:mb-8 max-w-xl">
                <div className="bg-muted/30 rounded-lg border border-border p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 text-xs text-muted-foreground">
                    <Terminal className="h-3 w-3" />
                    <span>~/{language === "es" ? "inicio" : "home"}</span>
                  </div>
                  <code className="text-xs sm:text-sm md:text-base text-primary break-all">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-primary ml-1 align-middle"
                    />
                  </code>
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.5}>
              <p className="max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed text-pretty">
                {t.hero.description}
              </p>
            </RevealText>

            <RevealText delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base border-2 bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group w-full sm:w-auto"
                >
                  {t.hero.cta}
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base text-muted-foreground hover:text-foreground w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {language === "es" ? "Contactar" : "Contact"}
                </Button>
              </div>
            </RevealText>

            
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16 flex items-center gap-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 shrink-0">
              <span className="text-primary font-mono text-lg sm:text-xl md:text-2xl">01.</span>
              <span className="hidden sm:inline">
                {language === "es" ? "Proyectos Destacados" : "Featured Projects"}
              </span>
              <span className="sm:hidden">{language === "es" ? "Proyectos" : "Projects"}</span>
            </h2>
            <div className="h-px bg-border flex-grow max-w-xs"></div>
          </motion.div>

          {/* Terminal-style Project Explorer - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block border border-border rounded-xl overflow-hidden bg-card shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
                </div>
                <span className="ml-2 sm:ml-3 text-xs text-muted-foreground">~/projects</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Terminal className="h-3 w-3" />
                <span>zsh</span>
              </div>
            </div>

            {/* Terminal Content - Split View */}
            <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] min-h-[500px] lg:min-h-[600px]">
              {/* File Explorer Sidebar */}
              <div className="border-r border-border bg-muted/20 p-3 sm:p-4">
                <div className="text-xs text-muted-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <Folder className="h-3 w-3" />
                  EXPLORER
                </div>
                <div className="space-y-1">
                  {projectsData.map((project, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setHoveredProject(index)}
                      onMouseEnter={() => setHoveredProject(index)}
                      className={`w-full text-left px-2 sm:px-3 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 sm:gap-3 group ${
                        hoveredProject === index
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span
                        className={`text-xs font-mono ${hoveredProject === index ? "text-primary" : "text-muted-foreground"}`}
                      >
                        0{index + 1}
                      </span>
                      <Code2
                        className={`h-3 w-3 sm:h-4 sm:w-4 shrink-0 ${hoveredProject === index ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span className="truncate">{project.title}</span>
                      <ArrowUpRight
                        className={`h-3 w-3 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${hoveredProject === index ? "opacity-100" : ""}`}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2 sm:mb-3">STATS</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "es" ? "Total proyectos" : "Total projects"}
                      </span>
                      <span className="text-primary font-medium">{projectsData.length}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "es" ? "Tecnologías" : "Technologies"}
                      </span>
                      <span className="text-primary font-medium">
                        {new Set(projectsData.flatMap((p) => p.tech)).size}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Preview Panel */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {hoveredProject !== null ? (
                    <motion.div
                      key={hoveredProject}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <div className="relative h-[200px] lg:h-[280px] overflow-hidden">
                        <Image
                          src={projectsData[hoveredProject].image || "/placeholder.svg"}
                          alt={projectsData[hoveredProject].title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent"></div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                          <a
                            href={projectsData[hoveredProject].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-2.5 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
                          >
                            <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                          </a>
                          <a
                            href={projectsData[hoveredProject].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                          >
                            <span className="text-xs font-medium">{language === "es" ? "Ver" : "View"}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-start justify-between mb-4 sm:mb-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-primary text-xs font-mono bg-primary/10 px-2 py-0.5 rounded">
                                {t.projects.featured}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                              {projectsData[hoveredProject].title}
                            </h3>
                          </div>
                          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/10">
                            0{hoveredProject + 1}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl">
                          {language === "es"
                            ? projectsData[hoveredProject].descriptionES
                            : projectsData[hoveredProject].descriptionEN}
                        </p>

                        <div className="mb-6 sm:mb-8">
                          <div className="text-xs text-muted-foreground mb-2 sm:mb-3 font-medium tracking-wide">
                            TECH STACK
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {projectsData[hoveredProject].tech.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-muted text-foreground rounded-md border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-border overflow-x-auto">
                          <div className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
                            <span className="text-primary">$</span>
                            <span className="text-muted-foreground">git clone</span>
                            <a
                              href={projectsData[hoveredProject].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline underline-offset-4 truncate"
                            >
                              {projectsData[hoveredProject].link}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-8"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center mb-4"
                      >
                        <MousePointer2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </motion.div>
                      <p className="text-muted-foreground text-xs sm:text-sm max-w-xs">
                        {language === "es"
                          ? "Selecciona un proyecto del explorador para ver los detalles"
                          : "Select a project from the explorer to view details"}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 sm:space-y-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <div className="relative h-40 sm:h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary text-primary-foreground rounded-lg flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xs font-mono bg-primary/10 px-2 py-0.5 rounded">
                      0{index + 1}
                    </span>
                    <span className="text-xs text-muted-foreground">{t.projects.featured}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {language === "es" ? project.descriptionES : project.descriptionEN}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-muted rounded border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 text-center"
          >
            
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 sm:mb-12 flex items-center gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 shrink-0">
                <span className="text-primary font-mono text-lg sm:text-xl md:text-2xl">02.</span>
                {language === "es" ? "Sobre Mí" : "About Me"}
              </h2>
              <div className="h-px bg-border flex-grow max-w-xs"></div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Main About Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="sm:col-span-2 bg-card border border-border rounded-xl p-5 sm:p-6 lg:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">
                      {language === "es" ? "¿Quién soy?" : "Who am I?"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {language === "es" ? "Un poco sobre mí" : "A bit about myself"}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {t.about.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>{language === "es" ? "España" : "Spain"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                    <span>{language === "es" ? "1 año exp." : "1 year exp."}</span>
                    <FileText className="h-4 w-4 text-primary shrink-0" />
                    <a href={language === "es" ? "/Curriculum Pedro_Zarzuela_Martin.pdf" : "/Curriculum Pedro_Zarzuela_Martin.pdf"} target="_blank" rel="noopener noreferrer">Curriculum</a>
                  </div>
                </div>
              </motion.div>

              {/* Profile Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group order-first sm:order-none"
              >
                <div className="bg-card border border-border rounded-xl p-3 sm:p-4 h-full hover:border-primary/50 transition-colors">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <img src="/imgCV.jpg" alt="" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <p className="font-medium text-foreground text-sm sm:text-base">Pedro Zarzuela Martin</p>
                    <p className="text-xs text-muted-foreground">FullStack Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-muted text-foreground rounded-md border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Experience Timeline Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="sm:col-span-2 lg:col-span-1 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
                  {journeyData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 min-w-[80px] px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
                        activeTab === index ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {journeyData[index].company.slice(0,30)}
                      {activeTab === index && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="p-4 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <div>
                          <h4 className="font-semibold text-foreground text-base sm:text-lg">
                            {language === "es" ? journeyData[activeTab].titleES : journeyData[activeTab].titleEN}
                          </h4>
                          <a href={journeyData[activeTab].carta} className="text-primary text-sm" target="_blank" rel="noopener noreferrer">@ Carta recomendación</a>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded self-start">
                          {journeyData[activeTab].period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {language === "es" ? journeyData[activeTab].descES : journeyData[activeTab].descEN}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="sm:col-span-2 lg:col-span-3 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Header con filtros */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-b border-border gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{t.about.education}</h3>
                      <p className="text-xs text-muted-foreground">{t.about.educationDesc}</p>
                    </div>
                  </div>

                  {/* Filtros */}
                  <div className="flex gap-2">
                    {[
                      { id: "all", labelES: "Todo", labelEN: "All" },
                      { id: "degree", labelES: "Estudios", labelEN: "Degrees" },
                      { id: "cert", labelES: "Certificaciones", labelEN: "Certifications" },
                    ].map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setEducationFilter(filter.id)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          educationFilter === filter.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {language === "es" ? filter.labelES : filter.labelEN}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid de formación */}
                <div className="p-4 sm:p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                      {filteredEducation.map((item, index) => (
                        <motion.div
                          key={`${item.type}-${index}`}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative bg-muted/30 border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
                        >
                          {/* Icono tipo */}
                          <div className="flex items-start justify-between mb-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                item.type === "degree"
                                  ? "bg-blue-500/10 text-blue-500"
                                  : "bg-amber-500/10 text-amber-500"
                              }`}
                            >
                              {item.type === "degree" ? (
                                <BookOpen className="h-4 w-4" />
                              ) : (
                                <Award className="h-4 w-4" />
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded">
                              {item.period}
                            </span>
                          </div>

                          {/* Contenido */}
                          <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {language === "es" ? item.titleES : item.titleEN}
                          </h4>
                          <p className="text-xs text-primary mb-2">
                            {language === "es" ? item.institutionES : item.institutionEN}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {language === "es" ? item.descES : item.descEN}
                          </p>

                          <a href={language === "es" ? item.tittle : item.tittle} className="text-xs text-muted-foreground line-clamp-3">
                            <FileText className="mt-3" /> 
                          </a>
                          {/* Indicador de tipo */}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Mensaje si no hay resultados */}
                  {filteredEducation.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      {language === "es" ? "No hay elementos en esta categoría" : "No items in this category"}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 sm:mb-12 flex items-center justify-center gap-3 sm:gap-4">
              <div className="h-px bg-border flex-grow max-w-[60px] sm:max-w-[100px]"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2">
                <span className="text-primary font-mono text-lg sm:text-xl md:text-2xl">03.</span>
                {language === "es" ? "Contacto" : "Contact"}
              </h2>
              <div className="h-px bg-border flex-grow max-w-[60px] sm:max-w-[100px]"></div>
            </div>

            {/* Contact Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="border border-border rounded-xl overflow-hidden bg-card shadow-2xl hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-muted/50 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="ml-2 sm:ml-3 text-xs text-muted-foreground">~/contact</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    <span>mail</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <Mail className="h-7 w-7 sm:h-10 sm:w-10 text-primary" />
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.contact.subtitle}</h3>
                  <p className="text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
                    {t.contact.description}
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-muted/50 rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <span className="text-primary text-sm sm:text-base">$</span>
                      <span className="text-foreground font-medium text-sm sm:text-base">pedrozarzumar@gmail.com</span>
                      <div className="p-1 sm:p-1.5 bg-background rounded border border-border group-hover:border-primary transition-colors">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={emailCopied ? "check" : "copy"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            {emailCopied ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </button>
                    <AnimatePresence>
                      {emailCopied && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-green-500 mt-2"
                        >
                          {language === "es" ? "Copiado al portapapeles" : "Copied to clipboard"}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3 sm:mb-4">
                      {language === "es" ? "O encuéntrame en" : "Or find me on"}
                    </p>
                    <div className="flex justify-center gap-2 sm:gap-3">
                      {[
                        { icon: Github, href: "https://github.com/Pedro-ZM", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-zarzuela-martin-b7b547339/", label: "LinkedIn" },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -4 }}
                          className="group flex flex-col items-center gap-1 sm:gap-2"
                        >
                          <div className="p-3 sm:p-4 border border-border rounded-xl bg-muted/30 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                            <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors hidden sm:block">
                            {social.label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 sm:py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="bg-muted/30 rounded-lg border border-border p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-muted-foreground">{language === "es" ? "Estado:" : "Status:"}</span>
                  <span className="text-foreground">
                    {language === "es" ? "Buscando nuevas oportunidades" : "Looking for new opportunities"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-500" />
                    {language === "es" ? "Código" : "Code"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-4 sm:gap-6">
              {[Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                {language === "es" ? "Diseñado y construido por" : "Designed & Built by"}{" "}
                <span className="text-primary">Pedro Zarzuela Martín</span>
              </p>
              <p className="text-xs text-muted-foreground/50 mt-1">
                {new Date().getFullYear()} • Next.js & Framer Motion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
