"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const plans = [
  {
    name: "Free",
    priceMonthly: "0 €",
    priceYearly: null,
    savings: null,
    description: "Einstieg ohne Kosten",
    features: [
      "10 AI-Chat-Anfragen/Tag",
      "KI-Trainingsplan bis 2 Wochen",
      "Manuelle Pläne bis 8 Wochen",
      "Mahlzeiten-Tracking",
      "Apple Health Sync",
    ],
    cta: "Kostenlos starten",
    highlighted: false,
  },
  {
    name: "Basic",
    priceMonthly: "4,99 €",
    priceYearly: "44,99 €",
    savings: "40 % sparen",
    description: "Mehr Analysen & längere Pläne",
    features: [
      "3 Food-Scans/Tag",
      "30 AI-Chat-Anfragen/Tag",
      "KI-Trainingsplan bis 6 Wochen",
      "Manuelle Pläne bis 8 Wochen",
      "Mahlzeiten-Tracking",
      "Apple Health Sync",
    ],
    cta: "Basic wählen",
    highlighted: true,
  },
  {
    name: "Premium",
    priceMonthly: "7,99 €",
    priceYearly: "69,99 €",
    savings: "27 % sparen",
    description: "Maximum an KI & Analyse",
    features: [
      "5 Food-Scans/Tag",
      "60 AI-Chat-Anfragen/Tag",
      "KI-Trainingsplan bis 8 Wochen",
      "Manuelle Pläne bis 8 Wochen",
      "Fortschrittsanalyse (KI)",
      "Mahlzeiten-Tracking",
      "Apple Health Sync",
    ],
    cta: "Premium wählen",
    highlighted: false,
  },
];

/* Animated price counter */
function AnimatedPrice({ value }: { value: string }) {
  const numMatch = value.match(/[\d,]+/);
  if (!numMatch) return <span>{value}</span>;
  const numStr = numMatch[0];
  const suffix = value.replace(numStr, "");
  const target = parseFloat(numStr.replace(",", "."));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const current = target * ease;
      setDisplay(
        current.toLocaleString("de-DE", {
          minimumFractionDigits: numStr.includes(",") ? 2 : 0,
          maximumFractionDigits: numStr.includes(",") ? 2 : 0,
        })
      );
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, numStr]);

  return (
    <span>
      {display} {suffix}
    </span>
  );
}

/* Single pricing card with 3D tilt */
function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ perspective: 800, rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col p-8 rounded-3xl transition-shadow duration-500 ${
        plan.highlighted
          ? "shimmer-border shadow-2xl shadow-[var(--accent)]/20 scale-105 z-10 bg-[var(--card)]"
          : "premium-card border border-[var(--border)]"
      }`}
    >
      {plan.highlighted && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[#5856d6] px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[var(--accent)]/30">
            ⭐ Beliebtester Plan
          </span>
        </motion.div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-[var(--foreground)]">{plan.name}</h3>
        <p className="mt-2 text-sm font-medium text-[var(--muted)]">{plan.description}</p>
      </div>

      <div className="mt-8 mb-8 pb-8 border-b border-[var(--border)]/50">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            <AnimatedPrice value={plan.priceMonthly} />
          </span>
          <span className="text-base font-medium text-[var(--muted)]">/Monat</span>
        </div>
        {plan.priceYearly ? (
          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
            <span>{plan.priceYearly}/Jahr</span>
            <motion.span
              className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              {plan.savings}
            </motion.span>
          </p>
        ) : (
          <p className="mt-3 text-sm font-medium text-[var(--muted)]">Dauerhaft kostenlos</p>
        )}
      </div>

      <ul className="flex-1 space-y-4">
        {plan.features.map((f, fi) => (
          <motion.li
            key={f}
            className="flex items-center gap-3 text-base font-medium text-[var(--foreground)]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + fi * 0.06 }}
          >
            <span
              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white shadow-sm"
              style={{ background: "var(--success)" }}
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 4.5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {f}
          </motion.li>
        ))}
      </ul>

      <a
        href="https://apps.apple.com/app/captn"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-10 block w-full rounded-full py-4 text-center text-base font-bold transition-all hover:scale-105 ${
          plan.highlighted
            ? "pulse-glow bg-gradient-to-r from-[var(--accent)] to-[#5856d6] text-white shadow-xl shadow-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--accent)]/40"
            : "bg-[var(--foreground)]/5 text-[var(--foreground)] hover:bg-[var(--foreground)]/10"
        }`}
      >
        {plan.cta}
      </a>
    </motion.article>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            Preise
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Fair &amp; transparent
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Fairplay-Freemium: Starte kostenlos, upgrade wenn du mehr willst.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 sm:mt-24 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
