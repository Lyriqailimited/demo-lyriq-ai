export default function Home() {
  const services = [
    'AI Voice Receptionist',
    'AI-powered BPO automation',
    'Lead generation pipelines',
    'Intelligent customer communications',
    '24/7 AI answering service',
  ]

  const features = [
    {
      title: '24/7 Availability',
      description: 'Never miss a call — your AI receptionist answers around the clock, every day of the year.',
      icon: '🕐',
    },
    {
      title: 'Instant Booking',
      description: 'Callers can book appointments instantly without waiting on hold or speaking to staff.',
      icon: '📅',
    },
    {
      title: 'Never Miss a Call',
      description: 'Every inbound call is captured, qualified, and routed — no lead left behind.',
      icon: '📞',
    },
  ]

  const bookingLink = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_LINK || '#book'

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Lyriq AI
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
            AI That Makes BPOs More Profitable
          </p>
          <a
            href="#widget"
            className="inline-block px-8 py-4 rounded-2xl text-lg font-semibold text-white border-2 border-white/60 hover:bg-white/10 transition-all"
          >
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-20 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Experience It Live</h2>
          <p className="text-gray-500 text-lg">Talk to Lyriq AI's AI Receptionist right now — no signup needed.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: 'none', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-5"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                />
                <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Modern businesses need always-on, intelligent customer communication. Here is how AI delivers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
        <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
          Book a demo call with the Lyriq AI team and see what AI can do for your business.
        </p>
        <a
          href={bookingLink}
          className="inline-block px-10 py-4 rounded-2xl bg-white text-lg font-semibold hover:bg-white/90 transition-colors"
          style={{ color: '#7c3aed' }}
        >
          Book a Demo Call
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>2026 Lyriq AI - London, UK - +44 20 0000 0000</p>
      </footer>
    </main>
  )
}
