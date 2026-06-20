"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { to: 500, suffix: "K+", label: "users impacted" },
  { to: 50, suffix: "%", label: "higher throughput" },
  { to: 45, suffix: "%", label: "faster API responses" },
  { to: 70, suffix: "%", label: "faster data lookups" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-7 text-center ${i !== 0 ? "border-l border-white/5" : ""} ${
              i === 2 ? "border-l-0 md:border-l" : ""
            }`}
          >
            <p className="text-3xl font-extrabold tracking-tight">
              <CountUp to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
