"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface AnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

// Fade In Animation
export const FadeIn = ({ children, delay = 0, duration = 0.6, className = "" }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Fade Up Animation
export const FadeUp = ({ children, delay = 0, duration = 0.6, className = "" }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide In Left Animation
export const SlideInLeft = ({ children, delay = 0, duration = 0.6, className = "" }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide In Right Animation
export const SlideInRight = ({ children, delay = 0, duration = 0.6, className = "" }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger Container for multiple animations
interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export const StaggerContainer = ({ children, staggerDelay = 0.1, className = "" }: StaggerContainerProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger Item for use with StaggerContainer
export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// Hover Scale Animation (for buttons/cards)
export const HoverScale = ({
  children,
  scale = 1.05,
  className = "",
}: { children: ReactNode; scale?: number; className?: string }) => {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.3 }} className={className}>
      {children}
    </motion.div>
  )
}
