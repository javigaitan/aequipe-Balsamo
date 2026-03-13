"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1f97ab] shadow-lg" : "bg-[#1f97ab]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 font-heading font-bold uppercase tracking-normal">
          <Link href="/" className="relative h-16 w-52">
            <Image src="/images/logoaequipe-new.png" alt="AEQUIPE Logo" fill className="object-contain" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#nosotros"
              className=" cursor-pointer text-white  hover:text-[#F7E95E] transition-colors text-3xl font-bold"
            >
              NOSOTROS
            </Link>
            <Link
              href="#familia"
              className=" cursor-pointer text-white hover:text-[#F7E95E] transition-colors text-3xl font-bold"
            >
              FAMILIAS
            </Link>
            <Button
              asChild
              className="bg-[#1f97ab] hover:bg-[#F7E95E] hover:text[#1f97ab] text-3xl cursor-pointer text-white hover:text-slate-900 font-bold transition-colors"
            >
              <Link href="#contacto">CONTACTANOS</Link>
            </Button>
            
          </div>
          

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                href="#nosotros"
                className="cursor-pointer font-heading font-bold text-2xl uppercase tracking-wide text-white hover:text-[#F7E95E] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#familia"
                className="cursor-pointer font-heading font-bold text-2xl uppercase tracking-wide text-white hover:text-[#F7E95E] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Familias
              </Link>
            
              <Button
                asChild
                className="cursor-pointer font-heading  text-4xl uppercase tracking-wide bg-[#F7E95E] hover:bg-[#1f97ab] text-{#1f97ab} hover:text-slate-900 transition-colors"
              >
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Contactanos
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
