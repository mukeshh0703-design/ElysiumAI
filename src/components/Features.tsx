import { MessageCircle, Bot, Workflow, BellRing } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Business Automation',
    description: 'Transform WhatsApp into a powerful sales and support channel with intelligent message automation and instant responses.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Lead Qualification',
    description: 'Smart AI assistants that engage, qualify, and nurture leads 24/7, so you never miss an opportunity.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Seamless integration with CRMs, Google Sheets, payment systems, and all your essential business tools.',
  },
  {
    icon: BellRing,
    title: 'Follow-ups & Nurturing',
    description: 'Automated reminders, follow-ups, and customer engagement sequences that drive conversions on autopilot.',
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Automation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              For Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Elysium AI specializes in building intelligent automation systems that connect your customers, streamline operations, and scale your business effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
