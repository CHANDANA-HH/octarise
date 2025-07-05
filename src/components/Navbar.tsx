"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-[#6C5CE7]/20 backdrop-blur-md shadow-lg">
            <div className="flex items-center space-x-3">
                <Image src="/favicon.ico" alt="Octarise Logo" width={40} height={40} />
                <span className="text-2xl font-bold">
                    OCTARISE <span className="text-sm font-light opacity-80">| Leading with a vision</span>
                </span>
            </div>

            <div className="space-x-6">
                 <Link href="/" className="hover:text-[#00CEC9] transition">HOME</Link>
                {isHome ? (
                    <>
                        
                        <a href="#about" className="hover:text-[#00CEC9] transition">ABOUT US</a>
                        <a href="#services" className="hover:text-[#00CEC9] transition">SERVICES</a>
                        <a href="#contact" className="hover:text-[#00CEC9] transition">CONTACT US</a>
                    </>
                ) : (
                    <>
                        
                        <Link href="/#about" className="hover:text-[#00CEC9] transition">ABOUT US</Link>
                        <Link href="/#services" className="hover:text-[#00CEC9] transition">SERVICES</Link>
                        <Link href="/#contact" className="hover:text-[#00CEC9] transition">CONTACT US</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
