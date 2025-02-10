"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
import type React from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full z-50 bg-black border-b border-blue-500"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-2xl font-bold">
            <span className="text-blue-400">ApplyNest</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <NavItem href="#features">Features</NavItem>
            <NavItem href="#about">About</NavItem>
            {session?.user?.email &&
              <NavItem href="/dashboard">Dashboard</NavItem>
            }
          </div>
          <div className="hidden md:flex space-x-4">
            {session?.user?.email ?
              <Button onClick={() => { signOut() }} className="text-white bg-red-600 hover:bg-red-500">
                Logout
              </Button>
              :
              <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => { signIn('google') }}>Sign Up</Button>
            }

          </div>
          {/* {signIn()} */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black p-4"
        >
          <div className="flex flex-col space-y-4">
            <NavItem href="#features">Features</NavItem>
            <NavItem href="#about">About</NavItem>
            {session?.user?.email && <NavItem href="/dashboard">Dashboard</NavItem>}
            {session?.user?.email ?
              <Button onClick={() => { signOut() }} className="text-white bg-red-600 hover:bg-red-500">
                Logout
              </Button>
              :
              <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => { signIn('google') }}>Sign Up</Button>
            }
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        className="text-white hover:text-blue-300 transition-colors text-lg font-semibold tracking-wider"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </Link>
  )
}

