"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

// Premium, velvety ease-out curve (smooth deceleration, zero abruptness)
export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

interface BaseRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

interface FadeInUpProps extends BaseRevealProps {
  yOffset?: number;
}

/**
 * Heading / Section Entrance: 60-100px travel, 0.85-1.1s duration, smooth ease-out
 */
export function FadeInUp({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  yOffset = 70,
}: FadeInUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface DirectionalRevealProps extends BaseRevealProps {
  offset?: number;
}

export function FadeInLeft({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  offset = 75,
}: DirectionalRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -offset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  offset = 75,
}: DirectionalRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: offset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
}: BaseRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInScale({
  children,
  className = "",
  delay = 0,
  duration = 0.95,
  initialScale = 0.93,
}: BaseRevealProps & { initialScale?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: initialScale, y: 35 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

/**
 * Sequential stagger container: 0.22s - 0.25s between siblings
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.22,
  delayChildren = 0.08,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: { opacity: shouldReduceMotion ? 1 : 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  scale?: boolean;
  hoverLift?: boolean;
  direction?: "up" | "left" | "right" | "alternate";
  index?: number;
  distance?: number;
  duration?: number;
}

/**
 * Staggered Card Item: supports alternating directions (Card 1 Left, Card 2 Right, Card 3 Left...),
 * 0.85-1.1s duration, opacity + translation + subtle scale.
 */
export function StaggerItem({
  children,
  className = "",
  yOffset = 60,
  scale = true,
  hoverLift = false,
  direction = "up",
  index,
  distance = 70,
  duration = 0.9,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  // Determine effective direction based on alternate mode + index
  let effectiveDir = direction;
  if (direction === "alternate" && typeof index === "number") {
    effectiveDir = index % 2 === 0 ? "left" : "right";
  }

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (effectiveDir) {
      case "left":
        return { opacity: 0, x: -distance, ...(scale ? { scale: 0.95 } : {}) };
      case "right":
        return { opacity: 0, x: distance, ...(scale ? { scale: 0.95 } : {}) };
      case "up":
      default:
        return { opacity: 0, y: yOffset, ...(scale ? { scale: 0.95 } : {}) };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getInitialPosition(),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: shouldReduceMotion ? 0.2 : duration,
            ease: SMOOTH_EASE,
          },
        },
      }}
      whileHover={
        hoverLift && !shouldReduceMotion
          ? {
              y: -5,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Inside-card Image Reveal: enters from the left (or right if reversed)
 */
export function CardImageReveal({
  children,
  className = "",
  reversed = false,
  delay = 0,
  duration = 0.85,
  offset = 45,
}: {
  children: ReactNode;
  className?: string;
  reversed?: boolean;
  delay?: number;
  duration?: number;
  offset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const travel = reversed ? offset : -offset;

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: travel },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: shouldReduceMotion ? 0.2 : duration,
            delay: shouldReduceMotion ? 0 : delay,
            ease: SMOOTH_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Inside-card Text Reveal: enters from the right (or left if reversed) with 0.15s stagger
 */
export function CardTextReveal({
  children,
  className = "",
  reversed = false,
  delay = 0.15,
  duration = 0.85,
  offset = 45,
}: {
  children: ReactNode;
  className?: string;
  reversed?: boolean;
  delay?: number;
  duration?: number;
  offset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const travel = reversed ? -offset : offset;

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: travel },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: shouldReduceMotion ? 0.2 : duration,
            delay: shouldReduceMotion ? 0 : delay,
            ease: SMOOTH_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Continuous Scroll Parallax: uses useScroll & useTransform to connect movement to scroll progress
 */
export function ScrollParallax({
  children,
  className = "",
  yOffset = 45,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-yOffset, yOffset]
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        !shouldReduceMotion
          ? {
              y: -5,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      whileTap={!shouldReduceMotion ? { scale: 0.99 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedButton({ children, className = "" }: AnimatedButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        !shouldReduceMotion
          ? {
              scale: 1.025,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
      whileTap={!shouldReduceMotion ? { scale: 0.975 } : undefined}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
