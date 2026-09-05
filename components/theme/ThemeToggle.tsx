'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      suppressHydrationWarning
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative overflow-hidden border border-border bg-background/75 shadow-[0_8px_24px_-20px_rgba(7,17,38,0.5)]"
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/[0.06] to-brand-orange/[0.07]" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.8 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.18 }}
          className="relative"
        >
          {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
