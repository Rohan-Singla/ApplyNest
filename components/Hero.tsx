"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import jobimage from "@/public/images/hero-job.png"

export default function Hero() {
    return (
        <section className="relative max-h-[95dvh] flex justify-center">
            <div className="container px-4 h-[100dvh] mt-24 md:mt-0 flex flex-col md:flex-row items-center w-full justify-start md:justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        Track and Organize Your
                        <span className="text-blue-500"> Job Search </span>
                    </h1>
                    <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                        Effortlessly track and manage your job applications in one place. Stay organized, focused, and one step closer to your next opportunity.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 transition-colors group text-lg">
                            Get Started
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12"
                >
                    <div className="relative inline-block">
                        <svg className="w-64 h-64 md:w-[40dvh] md:h-[40dvh]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#1515A5"
                                d="M39.9,-65.7C54.1,-60.5,69.3,-53.4,76.4,-41.5C83.5,-29.6,82.6,-12.9,79.7,2.9C76.8,18.7,72,33.6,62.6,44.9C53.2,56.2,39.2,63.9,24.5,69.1C9.8,74.3,-5.6,77,-20.5,74.3C-35.4,71.6,-49.9,63.5,-60.1,51.6C-70.3,39.7,-76.3,24,-78.1,8C-79.9,-8,-77.5,-24.3,-69.6,-37.4C-61.7,-50.5,-48.3,-60.4,-34.7,-66C-21.1,-71.6,-7.3,-72.9,3.8,-79.1C14.9,-85.2,25.8,-70.9,39.9,-65.7Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <Image
                            src={jobimage}
                            alt="Job Tracker Dashboard"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full object-cover rounded-lg shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            />
        </section>
    )
}

