// Enhanced Animation variants for Framer Motion
import { Variants } from 'framer-motion';

// Basic animations with improved easing
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing curve
    }
  }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1] // Bounce effect
    }
  }
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Advanced animations
export const morphIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.3,
    rotate: -10,
    filter: "blur(10px)"
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const floatIn: Variants = {
  initial: { 
    opacity: 0, 
    y: 100,
    scale: 0.8
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Continuous animations
export const neuralPulse = {
  scale: [1, 1.08, 1],
  opacity: [0.7, 1, 0.7],
  transition: { 
    duration: 3, 
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const gentleFloat = {
  y: [0, -10, 0],
  transition: { 
    duration: 4, 
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const subtleRotate = {
  rotate: [0, 5, 0, -5, 0],
  transition: { 
    duration: 8, 
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Container animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const staggerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverGlow = {
  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)",
  transition: { duration: 0.3 }
};

// Text animations
export const textReveal: Variants = {
  initial: { 
    opacity: 0,
    y: 20,
    skewY: 10
  },
  animate: { 
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const letterSpacing: Variants = {
  initial: { letterSpacing: "-0.05em" },
  animate: { 
    letterSpacing: "0em",
    transition: { duration: 0.8 }
  }
};

// Utility functions
export const createStagger = (delay: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay
    }
  }
});

export const createSpring = (stiffness: number = 100, damping: number = 10) => ({
  type: "spring",
  stiffness,
  damping
});