import { Target, Palette, Plug, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Understand Your Business',
    description: 'We analyze your workflows, customer journey, and pain points to identify automation opportunities.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design Custom AI Workflow',
    description: 'Our experts craft a bespoke automation blueprint tailored to your specific business needs.',
  },
  {
    icon: Plug,
    number: '03',
    title: 'Integrate WhatsApp & Tools',
    description: 'Seamlessly connect WhatsApp Business API with your CRM, databases, and essential tools.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Automate, Optimize & Scale',
    description: 'Launch your automation, monitor performance, and continuously optimize for maximum ROI.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            From Concept to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Automated Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven 4-step process ensures your automation is perfectly aligned with your business goals.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] h-full flex flex-col">
                  <div className="absolute -top-6 left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mt-12 flex-grow">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400/30 to-purple-400/30 mb-4">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-20">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
