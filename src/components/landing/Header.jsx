"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import CraftIALogo from "./CraftIALogo"

const navLinks = [
  { label: "Início", href: "hero" },
  { label: "Benefícios", href: "benefits" },
  { label: "Como Funciona", href: "how-it-works" },
  { label: "Planos", href: "pricing" },
  { label: "Depoimentos", href: "testimonials" },
  { label: "Portfólio", href: "portfolio" },
  { label: "FAQ", href: "faq" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isAboutPage = pathname === "/about"

  const whatsappLink =
    "https://wa.me/5592996074212?text=Olá! Quero criar minha Landing Page profissional."

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false)

    if (!isHomePage) {
      window.location.href = "/#" + sectionId
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-3"
            >
              <CraftIALogo size={40} />
              <span
                className={`text-xl font-bold ${
                  isScrolled
                    ? "text-gray-900"
                    : isAboutPage
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                CraftAI
              </span>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                      : isAboutPage
                      ? "text-white hover:text-blue-200 hover:bg-white/10"
                      : "text-gray-700 hover:text-blue-700 hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                    : isAboutPage
                    ? "text-white hover:text-blue-200 hover:bg-white/10"
                    : "text-gray-700 hover:text-blue-700 hover:bg-white/50"
                }`}
              >
                Sobre Nós
              </Link>
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-5 font-semibold rounded-xl shadow-md shadow-blue-700/20"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : isAboutPage
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-white/50"
              }`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-md border-b shadow-lg">
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="px-4 py-3 rounded-xl text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium text-left"
                    >
                      {link.label}
                    </button>
                  ))}

                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium"
                  >
                    Sobre Nós
                  </Link>

                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Button
                      asChild
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 font-semibold rounded-xl"
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
