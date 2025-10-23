"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Upload, Calendar, MapPin, Heart, Users, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface WeddingDetailsFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WeddingDetailsForm({ isOpen, onClose }: WeddingDetailsFormProps) {
  const [formData, setFormData] = useState({
    coupleName: "",
    weddingDate: "",
    venue: "",
    email: "",
    phone: "",
    guestCount: "",
    theme: "",
    specialRequests: "",
    invitationCard: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, invitationCard: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Wedding Details:", formData);
    alert("Thank you! We'll be in touch soon to create your beautiful wedding website.");
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
            Create Your Wedding Website
          </DialogTitle>
          <p className="text-center text-gray-600">
            Tell us about your special day and we'll craft something beautiful for you
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Couple Names */}
          <div className="space-y-2">
            <Label htmlFor="coupleName" className="text-sm font-medium text-gray-700">
              <Heart className="w-4 h-4 inline mr-2" />
              Couple Names *
            </Label>
            <Input
              id="coupleName"
              name="coupleName"
              placeholder="e.g., John & Jane"
              value={formData.coupleName}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          {/* Wedding Date */}
          <div className="space-y-2">
            <Label htmlFor="weddingDate" className="text-sm font-medium text-gray-700">
              <Calendar className="w-4 h-4 inline mr-2" />
              Wedding Date *
            </Label>
            <Input
              id="weddingDate"
              name="weddingDate"
              type="date"
              value={formData.weddingDate}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          {/* Venue */}
          <div className="space-y-2">
            <Label htmlFor="venue" className="text-sm font-medium text-gray-700">
              <MapPin className="w-4 h-4 inline mr-2" />
              Venue *
            </Label>
            <Input
              id="venue"
              name="venue"
              placeholder="e.g., The Grand Ballroom, New York"
              value={formData.venue}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>

          {/* Guest Count & Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 inline mr-2" />
                Expected Guests
              </Label>
              <Input
                id="guestCount"
                name="guestCount"
                type="number"
                placeholder="e.g., 150"
                value={formData.guestCount}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-sm font-medium text-gray-700">
                Wedding Theme
              </Label>
              <Input
                id="theme"
                name="theme"
                placeholder="e.g., Rustic, Modern, Vintage"
                value={formData.theme}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>

          {/* Invitation Card Upload */}
          <div className="space-y-2">
            <Label htmlFor="invitationCard" className="text-sm font-medium text-gray-700">
              <Camera className="w-4 h-4 inline mr-2" />
              Upload Your Invitation Card (Optional)
            </Label>
            <div className="border-2 border-dashed border-pink-200 rounded-lg p-6 text-center hover:border-pink-300 transition-colors">
              <Upload className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                {formData.invitationCard 
                  ? formData.invitationCard.name 
                  : "Click to upload or drag and drop your invitation card"
                }
              </p>
              <Input
                id="invitationCard"
                name="invitationCard"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('invitationCard')?.click()}
                className="mt-2"
              >
                Choose File
              </Button>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">
              Special Requests or Notes
            </Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Tell us about any specific design preferences, colors, or special elements you'd like included..."
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={3}
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                />
              ) : (
                <Heart className="w-4 h-4 mr-2" />
              )}
              {isSubmitting ? "Creating..." : "Create My Website"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
