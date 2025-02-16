"use client";
import { Home, FileText, BarChart2, Settings, Menu, LogOut } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useUser } from "@/contexts/userContext";

const navItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Applications", icon: FileText, href: "/applications" },
    { name: "Analytics", icon: BarChart2, href: "/analytics" },
    { name: "Settings", icon: Settings, href: "/settings" },
];

export function Layout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useUser();
    
    useEffect(() => {
        if (!session) {
            router.push("/");
        }
    }, [session, router]);

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                {/* Mobile Navigation */}
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden fixed top-4 right-4 z-50 rounded-full bg-zinc-800 hover:bg-zinc-700 shadow-lg"
                    >
                        <Menu size={20} className="text-zinc-300" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0 bg-zinc-900">
                    <div className="flex flex-col h-full">
                        <Link href="/" className="flex items-center gap-2 px-4 py-6">
                            <span className="font-bold text-3xl text-blue-400">ApplyNest</span>
                        </Link>
                        <nav className="flex flex-col gap-2 mt-4 px-4 flex-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-colors ${pathname === item.href
                                        ? "bg-zinc-800 text-blue-400"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Mobile User Profile */}
                        <div className="border-t border-zinc-800 pt-4 mt-auto">
                            <div className="flex items-center gap-3 px-4 pb-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white">{user?.name}</span>
                                    <span className="text-xs text-zinc-400">{user?.email}</span>
                                </div>
                                <Button
                                    size="icon"
                                    className="bg-red-500 hover:bg-red-600 shadow-lg"
                                    onClick={() => signOut()}
                                >
                                    <LogOut className="h-4 w-4 text-white" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed inset-y-0 flex-col w-72 p-4 border-r border-zinc-800 bg-zinc-900 shadow-lg">
                <Link href="/" className="flex items-center gap-2 px-4 py-6">
                    <span className="font-bold text-3xl text-blue-400">ApplyNest</span>
                </Link>
                <div className="flex flex-col gap-2 mt-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-colors ${pathname === item.href
                                ? "bg-zinc-800 text-blue-400"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                }`}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* User Profile Section */}
                <div className="mt-auto border-t border-zinc-800 pt-4">
                    <div className="flex items-center gap-3 px-4 pb-4">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white">{user?.name}</span>
                            <span className="text-xs text-zinc-400">{user?.email}</span>
                        </div>
                        <Button
                            size="sm"
                            className="ml-auto text-white bg-red-500 hover:bg-red-600 shadow-lg"
                            onClick={() => signOut()}
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="md:pl-64 p-4 md:p-8">{children}</main>
        </div>
    );
}
