"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "All events",
        path: "/events/all",
    },
];

export const Header = () => {
    const activePathname = usePathname();
    return (
        <header className="flex justify-between items-center border-b border-white/10 h-14 px-9">
            <Logo />
            <nav className="h-full">
                <ul className="flex gap-6 h-full text-sm">
                    {routes.map((route) => (
                        <li
                            key={route.name}
                            className={cn("flex items-center hover:text-white/100 transition relative", {
                                "text-white": activePathname === route.path,
                                "text-white/50": activePathname !== route.path,
                            })}
                        >
                            <Link href={route.path}>{route.name}</Link>

                            {activePathname === route.path && (
                                <motion.div
                                    layoutId="header-active-link"
                                    className="bg-acent h-1 w-full absolute bottom-0"
                                ></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
