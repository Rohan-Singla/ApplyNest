"use client"
import { Home, FileText, BarChart2, Settings, Menu, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const navItems = [
    { name: "Dashboard", icon: Home, href: "/" },
    { name: "Applications", icon: FileText, href: "/applications" },
    { name: "Analytics", icon: BarChart2, href: "/analytics" },
    { name: "Settings", icon: Settings, href: "/settings" },
];

export function Layout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/")
        }
    }, [session]);

    return (
        <div className="min-h-screen bg-black text-white">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* Mobile Navigation */}
            <Link href="/" className="flex items-center gap-2 px-2 py-4 ">
                <span className="font-semibold text-2xl text-right text-blue-400">ApplyNest</span>
            </Link>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="md:hidden fixed top-4 right-4 z-50">
                        <Menu size={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-70 p-0 bg-zinc-900">
                    <div className="flex flex-col h-full">
                        <nav className="flex flex-col gap-4 p-4 flex-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-2 text-muted-foreground hover:text-blue-400 transition-colors py-2 text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Mobile User Profile */}
                        <div className="border-t border-zinc-800 pt-4 mt-auto">
                            <div className="flex items-center gap-3 px-2">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white">{session?.user?.name}</span>
                                    <span className="text-xs text-zinc-400">{session?.user?.email}</span>
                                </div>
                                <Button size="icon" className="bg-red-500 hover:bg-red-600" onClick={() => signOut()}>
                                    <LogOut className="h-4 w-4 text-white" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed inset-y-0 flex-col w-70 p-4 border-r bg-zinc-900">
                <Link href="/" className="flex items-center gap-2 px-2 py-4">
                    <span className="font-semibold text-2xl text-center text-blue-400">ApplyNest</span>
                </Link>
                <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-blue-400 transition-colors py-2 text-lg"
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* User Profile Section */}
                <div className="mt-auto border-t border-zinc-800 pt-4">
                    <div className="flex items-center gap-3 px-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white">{session?.user?.name}</span>
                            <span className="text-xs text-zinc-300">{session?.user?.email}</span>
                        </div>
                        <Button size="sm" className="ml-auto text-white bg-red-500 hover:bg-red-600" onClick={() => signOut()}>
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
