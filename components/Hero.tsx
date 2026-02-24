"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

/* --- screen cycling for "video-like" demo --- */
const demoScreens = [
  SCREENS.dashboard,
  SCREENS.training,
  SCREENS.nutrition,
  SCREENS.chat,
  SCREENS.stats,
];

/* --- particles config (deterministic to avoid hydration mismatch) --- */
const particles = [
  { id: 0, size: 6,  x: 15, y: 20, duration: 7,  delay: 0,   color: "var(--accent)" },
  { id: 1, size: 10, x: 72, y: 35, duration: 5,  delay: 1.2, color: "#5856d6" },
  { id: 2, size: 5,  x: 40, y: 75, duration: 8,  delay: 2.5, color: "var(--accent)" },
  { id: 3, size: 8,  x: 85, y: 55, duration: 6,  delay: 0.8, color: "#5856d6" },
  { id: 4, size: 7,  x: 25, y: 60, duration: 9,  delay: 3.1, color: "var(--accent)" },
  { id: 5, size: 11, x: 60, y: 15, duration: 5.5, delay: 1.8, color: "#5856d6" },
];

/* --- word-by-word reveal --- */
function AnimatedHeadline() {
  const line1Words = ["Dein", "KI-Personal-", "trainer", "&"];
  const line2Words = ["Ernährungs-", "berater"];

  return (
    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-[4rem] lg:text-[4.5rem]">
      <span className="text-gradient inline">
        {line1Words.map((word, i) => (
          <motion.span
            key={`l1-${i}`}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
      <br />
      <span className="text-shimmer inline">
        {line2Words.map((word, i) => (
          <motion.span
            key={`l2-${i}`}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: 0.8 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

/* --- animated counter stat --- */
function AnimatedCounter({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <span className="text-2xl font-bold text-[var(--foreground)] counter-glow sm:text-3xl">
        {count}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-medium text-[var(--muted)]">
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [currentScreen, setCurrentScreen] = useState(0);

  /* mouse-follow tilt values */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!phoneRef.current) return;
      const rect = phoneRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  /* auto-cycle screens */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % demoScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-mesh bg-mesh-animated px-6 pt-20 pb-12 sm:px-8 sm:pt-32 sm:pb-20 min-h-[100svh] flex items-center"
    >
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          aria-hidden="true"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            opacity: 0.4,
            ["--duration" as string]: `${p.duration}s`,
            ["--delay" as string]: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-12">
        {/* Left: Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            Jetzt verfügbar · iOS · DACH
          </motion.div>

          {/* App Icon */}
          <motion.div
            className="mb-8 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-[var(--accent)] to-[#5856d6] opacity-30 blur transition duration-500 group-hover:opacity-60"></div>
              <Image
                src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
                alt="Captn App Icon"
                width={88}
                height={88}
                className="relative h-[88px] w-[88px] rounded-[1.25rem] shadow-2xl shadow-black/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                priority
              />
            </div>
          </motion.div>

          <AnimatedHeadline />

          <motion.p
            className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Training und Ernährung intelligent verbunden – mit einem Plan, der
            sich dir anpasst. Alles in einer App.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="https://apps.apple.com/app/captn"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-glow group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[var(--accent)] to-[#5856d6] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[var(--accent)]/30 transition-all hover:scale-105 hover:shadow-[var(--accent)]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                {/* Apple logo */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Jetzt im App Store
              </span>
            </a>
            <Link
              href="/#features"
              className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-8 py-4 text-base font-medium text-[var(--accent)] backdrop-blur-md transition-all hover:bg-[var(--accent)]/20 hover:scale-105"
            >
              Mehr erfahren →
            </Link>
          </motion.div>

          {/* Animated stats row */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-8 md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <AnimatedCounter
              target={5}
              suffix="+"
              label="Features"
              delay={1600}
            />
            <div className="h-8 w-px bg-[var(--border)]" />
            <AnimatedCounter
              target={1}
              suffix=" App"
              label="für alles"
              delay={1800}
            />
            <div className="h-8 w-px bg-[var(--border)]" />
            <AnimatedCounter
              target={100}
              suffix="%"
              label="KI-gestützt"
              delay={2000}
            />
          </motion.div>
        </motion.div>

        {/* Right: 3D App mockup with screen cycling */}
        <motion.div
          ref={phoneRef}
          className="flex justify-center md:justify-end relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="relative z-10"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* Animated glow behind phone */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-[3rem] opacity-40 blur-3xl"
              animate={{
                background: [
                  "linear-gradient(145deg, #0071e3 0%, #5856d6 100%)",
                  "linear-gradient(200deg, #5856d6 0%, #0071e3 100%)",
                  "linear-gradient(300deg, #0071e3 0%, #34c759 50%, #5856d6 100%)",
                  "linear-gradient(145deg, #0071e3 0%, #5856d6 100%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="device-frame relative">
              <div className="device-frame-inner relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScreen}
                    src={previewPath(demoScreens[currentScreen])}
                    alt="Captn App Demo"
                    width={300}
                    height={533}
                    className="block h-auto w-[260px] object-top sm:w-[300px]"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    loading="eager"
                    decoding="async"
                  />
                </AnimatePresence>
                {/* Screen cycling indicator dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {demoScreens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentScreen(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentScreen
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Screen ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--section-alt))",
        }}
      />
    </section>
  );
}
