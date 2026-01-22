import { MessageCircle, Brain, GitBranch, Database, CreditCard, Calendar } from 'lucide-react';

const technologies = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Business API',
    description: 'Official WhatsApp Business Platform integration for reliable messaging.',
  },
  {
    icon: Brain,
    title: 'AI Chatbots & LLMs',
    description: 'GPT-4 powered conversational AI for natural, intelligent interactions.',
  },
  {
    icon: GitBranch,
    title: 'Advanced Automation',
    description: 'Zapier, Make, N8n and custom workflows for complex business logic.',
  },
  {
    icon: Database,
    title: 'CRM & Data Integration',
    description: 'Google Sheets, Airtable, HubSpot, and custom database connections.',
  },
  {
    icon: CreditCard,
    title: 'Payment Systems',
    description: 'Razorpay, Stripe, and payment gateway integrations for seamless transactions.',
  },
  {
    icon: Calendar,
    title: 'Calendar & Scheduling',
    description: 'Google Calendar, Calendly integration for automated appointment booking.',
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              TECHNOLOGY STACK
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powered By
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Cutting-Edge Tech
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage the most advanced tools and platforms to deliver robust, scalable automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-blue-400" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
