import { Sparkles, Zap, MessageSquare, Globe, Shield, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Custom-Built Automations',
    description: 'No templates. Every solution is designed specifically for your business needs and goals.',
  },
  {
    icon: Zap,
    title: 'Fast Setup & Deployment',
    description: 'Quick turnaround times to get your automations live and generating results rapidly.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp AI Specialists',
    description: 'Deep expertise in WhatsApp Business API and AI-powered conversation automation.',
  },
  {
    icon: Globe,
    title: 'Built for Global Businesses',
    description: 'Scalable solutions designed for Indian and international markets alike.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime to keep your business running smoothly.',
  },
  {
    icon: BarChart,
    title: 'Scalable Architecture',
    description: 'Automations that grow with your business, from startup to enterprise scale.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Elysium AI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just build automations—we create intelligent systems that transform how you do business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
