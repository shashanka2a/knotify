"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(255,182,193,0.15)] transition-all duration-300"
      whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(255,182,193,0.25)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-br from-pink-50 to-amber-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-pink-400" />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
