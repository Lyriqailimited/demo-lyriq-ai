import { PhoneCall, Clock, CalendarCheck, Mic } from "lucide-react";

const SERVICES = [
  "AI Voice Receptionist",
  "AI-powered BPO automation",
  "Lead generation pipelines",
  "Intelligent customer communications",
  "24/7 AI answering service",
];

const AI_FEATURES = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your AI receptionist never sleeps. Handle calls, bookings, and enquiries around the clock — even on holidays.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    description:
      "Customers get booked in seconds. No hold music, no missed calls — just a smooth experience every time.",
  },
  {
    icon: PhoneCall,
    title: "Never Miss a Call",
    description:
      "Every inbound call is answered immediately. Turn missed calls into booked jobs automatically.",
  },
];

const BOOKING_LINK = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium">AI Voice Receptionist</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Lyriq AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            AI That Makes BPOs More Profitable
          </p>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            London, UK &mdash; +44 20 0000 0000
          </p>
          <a
            href="#widget"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full text-lg hover:bg-purple-50 transition-colors shadow-xl"
          >
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget Section */}
      <section id="widget" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Experience It Live
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Click below to talk to Lyriq AI's AI receptionist — powered by
            real voice AI.
          </p>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-purple-100 bg-purple-50 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "#7c3aed" }}
                >
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Stop losing leads to voicemail. Lyriq AI handles every call,
            every time — so your team can focus on delivering the work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AI_FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">
            Book a demo call and see how Lyriq AI can transform your business
            with AI-powered voice automation.
          </p>
          <a
            href={BOOKING_LINK}
            className="inline-block font-semibold px-10 py-4 rounded-full text-lg text-white hover:opacity-90 transition-opacity shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
            }}
          >
            Book a demo call
          </a>
        </div>
      </section>
    </main>
  );
}
