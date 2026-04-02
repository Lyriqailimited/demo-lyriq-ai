import { PhoneCall, Clock, Calendar, CheckCircle } from "lucide-react";

const services = [
  "AI Voice Receptionist",
  "AI-powered BPO automation",
  "Lead generation pipelines",
  "Intelligent customer communications",
  "24/7 AI answering service",
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Never miss a call again. Our AI receptionist answers every enquiry around the clock, even outside business hours.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description:
      "Callers can schedule appointments immediately without waiting on hold or leaving a voicemail.",
  },
  {
    icon: PhoneCall,
    title: "Never Miss a Call",
    description:
      "Every inbound call is handled professionally, qualifying leads and capturing contact details automatically.",
  },
];

export default function Home() {
  const calendarLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book";

  return (
    <main className="min-h-screen bg-[#0a0519]">
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0519 0%, #1a0b3d 50%, #0a0519 100%)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.35) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border"
            style={{
              backgroundColor: "rgba(124,58,237,0.15)",
              borderColor: "rgba(168,85,247,0.4)",
              color: "#a855f7",
            }}
          >
            London, UK · +44 20 0000 0000
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Lyriq AI
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-10 max-w-2xl mx-auto">
            AI That Makes BPOs More Profitable
          </p>
          <a
            href="#widget"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
              boxShadow: "0 0 40px rgba(124,58,237,0.5)",
            }}
          >
            <PhoneCall className="w-5 h-5" />
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-20 px-6 bg-[#0d0722]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Talk to Our AI Receptionist
          </h2>
          <p className="text-purple-300 text-lg">
            Experience a live conversation with Lyriq AI&apos;s intelligent voice assistant.
          </p>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 60px rgba(124,58,237,0.3)" }}>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[#0a0519]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-purple-300 text-lg max-w-xl mx-auto">
              AI-powered solutions built for modern BPO and outsourcing businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl p-6 border flex items-start gap-4"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  borderColor: "rgba(168,85,247,0.2)",
                }}
              >
                <CheckCircle className="w-6 h-6 mt-0.5 shrink-0" style={{ color: "#a855f7" }} />
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-6 bg-[#0d0722]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why an AI Receptionist?
            </h2>
            <p className="text-purple-300 text-lg max-w-xl mx-auto">
              Capture every lead, delight every caller, without adding headcount.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 border text-center"
                style={{
                  backgroundColor: "rgba(124,58,237,0.1)",
                  borderColor: "rgba(168,85,247,0.25)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(124,58,237,0.25)" }}
                >
                  <f.icon className="w-7 h-7" style={{ color: "#a855f7" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-purple-300 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #1a0b3d 0%, #0a0519 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Transform Your BPO?
          </h2>
          <p className="text-purple-300 text-lg mb-10">
            Book a 15-minute demo call and see Lyriq AI in action.
          </p>
          <a
            href={calendarLink}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
              boxShadow: "0 0 40px rgba(124,58,237,0.5)",
            }}
          >
            <Calendar className="w-5 h-5" />
            Book a demo call
          </a>
        </div>
      </section>

      <footer className="bg-[#0a0519] border-t py-8 text-center text-purple-400 text-sm" style={{ borderColor: "rgba(168,85,247,0.15)" }}>
        © 2026 Lyriq AI · London, UK · +44 20 0000 0000 · test@lyriq.ai
      </footer>
    </main>
  );
}
