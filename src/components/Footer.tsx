import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-blue-500/30">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start gap-4 mb-6">
              <img
                src="/elysium_ai_logo.png"
                alt="Elysium AI Logo"
                className="w-22 h-22 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Elysium AI</h2>
                <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Automate I Innovate I Dominate
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Elysium AI helps businesses automate WhatsApp conversations and workflows using AI-driven systems designed to scale.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                WhatsApp Business Automation
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                AI Chatbots
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                Workflow Automation
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                CRM & Lead Management
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                Follow-ups & Reminders
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Industries</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                Boutiques
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                Gyms & Fitness Centers
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                Real Estate
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer duration-200">
                Dental Clinics
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+918143159345" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    +91 8881883006
                  </a>
                  <a href="tel:+918083749999" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    +91 7075033013
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <a href="mailto:connect@elysiumai.online" className="text-gray-400 hover:text-purple-400 transition-colors text-sm break-all">
                    connect@elysiumai.online
                  </a>
                  <a href="mailto:automation@elysiumai.online" className="text-gray-400 hover:text-purple-400 transition-colors text-sm break-all">
                    automation@elysiumai.online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  83 A, Ampro Colony<br />
                  Kharmanghat, Hyderabad
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elysium AI. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
