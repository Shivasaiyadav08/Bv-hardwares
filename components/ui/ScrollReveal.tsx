'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.58,
  className = '',
  staggerChildren,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 };
      case 'down':
        return { y: -24, x: 0 };
      case 'left':
        return { x: 24, y: 0 };
      case 'right':
        return { x: -24, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const variants: Variants = {
    hidden: reduceMotion
      ? { opacity: 1, x: 0, y: 0 }
      : {
          opacity: 0,
          x: offset.x,
          y: offset.y,
        },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
        ...(staggerChildren && !reduceMotion
          ? {
              staggerChildren,
              delayChildren: delay,
            }
          : {}),
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px', amount: 0.12 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
