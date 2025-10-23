"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useMemo } from "react";

export function HeartConfetti() {
  const hearts = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      initialX: 20 + Math.random() * 60,
      animateX: 20 + Math.random() * 60,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300/40"
          initial={{
            x: `${heart.initialX}%`,
            y: "110%",
            scale: 0,
            rotate: 0,
          }}
          animate={{
            y: "-10%",
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            x: `${heart.animateX}%`,
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeOut",
          }}
        >
          <Heart className="w-4 h-4 fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
