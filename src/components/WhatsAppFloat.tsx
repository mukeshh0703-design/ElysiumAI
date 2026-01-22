"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* CALL BUTTON */}
      <a
        href="tel:+917075033013"
        className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center
                   shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="text-white w-6 h-6" />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917075033013?text=Hi%20I%20am%20interested%20in%20automation%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center
                   shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </a>
    </div>
  );
}
