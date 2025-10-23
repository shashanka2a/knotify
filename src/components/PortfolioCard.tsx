"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioCardProps {
  coupleName: string;
  imageUrl: string;
  website?: string;
}

export function PortfolioCard({ coupleName, imageUrl, website }: PortfolioCardProps) {
  const handleClick = () => {
    if (website && website !== "#") {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      <ImageWithFallback
        src={imageUrl}
        alt={coupleName}
        className="w-full h-full object-cover"
        width={400}
        height={600}
        fill
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent flex items-end p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white">
          <p className="mb-2">{coupleName}</p>
          <div className="flex items-center gap-2">
            <span>View Invite</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
