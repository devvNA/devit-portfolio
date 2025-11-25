"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Deep dark background */}
            <div className="absolute inset-0 bg-[#02040a]" />

            {/* Radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

            {/* Grid pattern (optional, subtle) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating orbs/glows */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/10 blur-[100px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Shooting star / beam effect */}
            <motion.div
                className="absolute top-0 left-0 w-[2px] h-[200px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20 rotate-45"
                initial={{ x: "-10%", y: "-10%" }}
                animate={{
                    x: ["0%", "120%"],
                    y: ["0%", "120%"],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3,
                }}
            />
            <motion.div
                className="absolute top-1/4 left-0 w-[2px] h-[150px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-20 rotate-45"
                initial={{ x: "-10%", y: "-10%" }}
                animate={{
                    x: ["0%", "120%"],
                    y: ["0%", "120%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 5,
                }}
            />
        </div>
    );
}
