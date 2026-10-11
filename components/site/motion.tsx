"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, HTMLAttributes, PointerEvent, ReactNode } from "react";
import { MotionConfig, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Thin progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, y = 32, style }: { children: ReactNode; className?: string; delay?: number; y?: number; style?: CSSProperties }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** One masked line of a headline that slides up on load. */
export function LineReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="line-mask">
      <motion.span className="line-inner" initial={{ y: "112%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1.1, delay, ease: EASE }}>
        {children}
      </motion.span>
    </span>
  );
}

/** Counts up to `value` when it scrolls into view. Renders the final value on the server. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || reduced || !node) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (latest) => { node.textContent = `${Math.round(latest)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, reduced, value, suffix]);

  return <span ref={ref}>{value}{suffix}</span>;
}

/** Pulls its children slightly toward the cursor. */
export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return <motion.div className="magnetic" style={{ x, y }} onPointerMove={onPointerMove} onPointerLeave={reset}>{children}</motion.div>;
}

/** Tilts in 3D to follow the cursor. */
export function Tilt({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-1, 1], [-max, max]), { stiffness: 160, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-1, 1], [max, -max]), { stiffness: 160, damping: 18 });

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const reset = () => { px.set(0); py.set(0); };

  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformPerspective: 1100 }} onPointerMove={onPointerMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}

/**
 * Exposes the pointer position to CSS: `--mx`/`--my` in pixels for spotlight
 * gradients and `--px`/`--py` in the range -1..1 for parallax.
 */
export function Spot({ as: Tag = "div", children, ...props }: { as?: "div" | "section" | "article" } & HTMLAttributes<HTMLElement>) {
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--px", ((x / rect.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--py", ((y / rect.height) * 2 - 1).toFixed(3));
  };
  return <Tag {...props} onPointerMove={onPointerMove}>{children}</Tag>;
}

/** Timeline wrapper whose rail fills in as the section scrolls past. */
export function TimelineRail({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return (
    <div className={className} ref={ref}>
      <div className="timeline-rail" aria-hidden="true"><motion.i style={{ scaleY }} /></div>
      {children}
    </div>
  );
}
