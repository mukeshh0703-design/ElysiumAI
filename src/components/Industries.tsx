import { ShoppingBag, Dumbbell, Building2, Stethoscope } from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    title: 'Boutiques',
    features: [
      'WhatsApp catalog automation',
      'Automated order inquiries & follow-ups',
      'Customer re-engagement & offers',
      'Appointment & pickup confirmations',
    ],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Dumbbell,
    title: 'Gyms & Fitness Centers',
    features: [
      'Automated lead capture from ads',
      'Trial session & membership follow-ups',
      'Class reminders & renewals',
      'Inactive member re-engagement',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    features: [
      'Instant WhatsApp lead response',
      'Property details & brochure automation',
      'Site visit scheduling',
      'Automated follow-ups for hot & cold leads',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Stethoscope,
    title: 'Dental Clinics',
    features: [
      'Appointment booking via WhatsApp',
      'Automated reminders & confirmations',
      'Patient follow-ups after treatment',
      'Review & feedback collection',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Automations Built For
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Your Industry
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored automation solutions designed specifically for your business needs and customer journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${industry.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {industry.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient} mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
