"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_20px_rgba(255,182,193,0.1)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="w-10 h-10 text-amber-400 mb-4" />
      <p className="italic text-gray-700 mb-6">{quote}</p>
      <div>
        <p className="text-gray-900">{author}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}
