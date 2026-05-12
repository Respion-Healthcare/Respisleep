export default function Features() {
  const features = [
    {
      icon: "🏥",
      title: "Clinically Validated",
      text:
        "Every product is backed by rigorous clinical studies, FDA clearance, and real-world patient outcome data spanning decades.",
    },

    {
      icon: "📱",
      title: "DreamMapper App",
      text:
        "Track therapy progress, mask leak, AHI events and usage hours in real time via Philips' free companion mobile app.",
    },

    {
      icon: "🌙",
      title: "SmartRamp Technology",
      text:
        "Gentle pressure ramp-up while falling asleep, automatically switching to therapeutic pressure when sleep is detected.",
    },

    {
      icon: "🔒",
      title: "Genuine Warranty",
      text:
        "All devices come with 2–5 year manufacturer warranty, local service centres, and dedicated clinical support.",
    },

    {
      icon: "🚚",
      title: "Pan-India Delivery",
      text:
        "Free express shipping across India with cold-chain logistics for sensitive components and accessories.",
    },

    {
      icon: "🩺",
      title: "Setup Support",
      text:
        "Free virtual setup session with certified respiratory therapists to calibrate your device and optimize therapy.",
    },
  ];

  return (
    <section className="features">
      {/* HEADER */}
      <div className="section-label">
        Why Philips Respironics
      </div>

      <div className="section-title">
        Trusted Technology,
        <span> Proven Results</span>
      </div>

      {/* FEATURES GRID */}
      <div className="feat-grid">
        {features.map(
          (feature, index) => (
            <div
              key={index}
              className="feat-card"
            >
              <div className="feat-icon">
                {feature.icon}
              </div>

              <div className="feat-title">
                {feature.title}
              </div>

              <div className="feat-text">
                {feature.text}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}