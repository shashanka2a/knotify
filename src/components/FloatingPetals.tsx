"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Circle } from "lucide-react";
import { useMemo } from "react";

export function FloatingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      Icon: i % 3 === 0 ? Sparkles : i % 3 === 1 ? Heart : Circle,
      initialX: Math.random() * 100,
      animateX: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-pink-200/30"
          initial={{
            x: `${petal.initialX}%`,
            y: -20,
            rotate: 0,
          }}
          animate={{
            y: "100vh",
            x: `${petal.animateX}%`,
            rotate: 360,
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{
            left: `${petal.left}%`,
          }}
        >
          <petal.Icon className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  );
}
