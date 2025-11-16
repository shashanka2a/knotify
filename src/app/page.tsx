"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Sparkles, 
  Image, 
  Calendar, 
  MapPin, 
  ImageIcon, 
  Mail, 
  Instagram, 
  Send,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FloatingPetals } from "@/components/FloatingPetals";
import { HeartConfetti } from "@/components/HeartConfetti";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { WeddingDetailsForm } from "@/components/WeddingDetailsForm";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "Personalized templates that reflect your unique love story and wedding theme.",
    },
    {
      icon: Heart,
      title: "Love Story",
      description: "Share your journey from 'how we met' to 'happily ever after' beautifully.",
    },
    {
      icon: Calendar,
      title: "Event Schedule",
      description: "Let guests know all ceremony details, timings, and special moments.",
    },
    {
      icon: ImageIcon,
      title: "Photo Gallery",
      description: "Showcase your engagement photos and pre-wedding memories elegantly.",
    },
    {
      icon: Send,
      title: "Easy Sharing",
      description: "Share your wedding website with guests through social media and messaging.",
    },
    {
      icon: Instagram,
      title: "Social Integration",
      description: "Connect your social media and create a cohesive online presence.",
    },
  ];

  const portfolio = [
    { 
      name: "Harish & Deekshitha", 
      image: "/image.png",
      website: "https://www.harishanddeekshitha.com/"
    },
    { 
      name: "Aravind & Harika", 
      image: "/aravind.png",
      website: "https://www.aravindandharika.com/"
    },
    { 
      name: "Sharath & Meghana", 
      image: "/sharath.jpg",
      website: "https://www.sharathandmeghana.com/"
    },
  ];

  const testimonials = [
    {
      quote: "Knotify transformed our wedding invitation into a stunning digital experience. Our guests were blown away by the beautiful website and easy sharing features!",
      author: "Harish & Deekshitha",
      role: "Wedding November 2025",
    },
    {
      quote: "From design to delivery, Knotify made everything effortless. The custom gallery and social integration were exactly what we needed for our wedding website.",
      author: "Aravind & Harika",
      role: "Wedding November 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFF9F0] to-[#FBEED9]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <FloatingPetals />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Heart className="w-16 h-16 text-pink-400 fill-pink-200 mx-auto" />
            </motion.div>
            
            <h1 className="mb-6 text-5xl md:text-7xl bg-gradient-to-r from-pink-500 to-amber-600 bg-clip-text text-transparent">
              Your Wedding. Your Story.<br />Your Own Website.
          </h1>
            
            <p className="mb-10 max-w-2xl mx-auto text-gray-700 text-lg md:text-xl">
              Knotify creates your personalized wedding website: elegant, shareable, and unforgettable. Perfect for sharing your love story with family and friends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-pink-400 to-amber-400 hover:from-pink-500 hover:to-amber-500 text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Create Your Invite
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6 rounded-2xl"
              >
                <Image className="w-5 h-5 mr-2" />
                View Samples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593043927112-08289c3f1b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGludml0YXRpb258ZW58MXx8fHwxNzYxMjI1MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elegant wedding invitation"
                  className="w-full h-full object-cover"
                  width={1080}
                  height={1080}
                  fill
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl md:text-5xl text-gray-900">
                More than an invitation. It's your story, beautifully told.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Knotify believes every love story deserves to be celebrated in a way that's as unique as the couple themselves. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our platform empowers you to create a personalized wedding website that captures your journey, shares your story beautifully, and becomes a cherished keepsake for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio-section" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
              Every Couple. Every Culture. Every Story.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how couples have brought their love stories to life with Knotify.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {portfolio.map((item, index) => (
              <PortfolioCard key={index} coupleName={item.name} imageUrl={item.image} website={item.website} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-pink-50/50 to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
              Loved by Couples Everywhere
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <HeartConfetti />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl md:text-6xl text-gray-900">
              Ready to announce your big day in style?
            </h2>
            <p className="mb-10 text-gray-600 text-lg max-w-2xl mx-auto">
              Tell us your wedding date and theme, and we'll craft your story into a beautiful, shareable website.
            </p>
            
            <Button 
              size="lg"
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to create my wedding website with Knotify.");
                window.open(`https://wa.me/918179504333?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-10 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-6 h-6 mr-2 fill-current" />
              Start Your Knotify Invite
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white/60 backdrop-blur-sm border-t border-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-6">
              <motion.a
                href="https://instagram.com/knotify.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-pink-400 hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-pink-400 hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-gray-600">
              © 2025 Knotify | Tie the Knot, Beautifully
            </p>
          </div>
        </div>
      </footer>

      {/* Wedding Details Form Dialog */}
      <WeddingDetailsForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
}