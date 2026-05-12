export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="hero-grid"></div>

      <div className="hero-content">

        <div className="hero-badge">
          Philips Respironics Official
        </div>

        <h1>
          Breathe{" "}
          <span className="line2">
            Better Every Day
          </span>
        </h1>

        <p className="hero-sub">
          Complete range of Philips CPAP, BiPAP,
          Oxygen Concentrators and respiratory
          accessories — clinically proven,
          trusted by millions worldwide.
        </p>

        <div className="hero-actions">

          <a
            href="#products"
            className="btn-primary"
          >
            Explore Products →
          </a>

          <a
            href="#categories"
            className="btn-ghost"
          >
            📋 View Categories
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <div className="stat-val">
              200+
            </div>

            <div className="stat-label">
              Products
            </div>
          </div>

          <div>
            <div className="stat-val">
              50M+
            </div>

            <div className="stat-label">
              Patients Helped
            </div>
          </div>

          <div>
            <div className="stat-val">
              130+
            </div>

            <div className="stat-label">
              Countries
            </div>
          </div>

        </div>
      </div>

      <div className="hero-visual">

        <div className="device-card">

          <div className="device-icon-ring">
            🫁
          </div>

          <div className="device-name">
            DreamStation 2
          </div>

          <div className="device-model">
            Auto CPAP — Advanced Edition
          </div>

          <div className="device-stats">

            <div className="ds-item">
              <div className="ds-val">
                4–20
              </div>

              <div className="ds-key">
                cmH₂O Range
              </div>
            </div>

            <div className="ds-item">
              <div className="ds-val">
                28 dB
              </div>

              <div className="ds-key">
                Sound Level
              </div>
            </div>

            <div className="ds-item">
              <div className="ds-val">
                Wifi
              </div>

              <div className="ds-key">
                Connectivity
              </div>
            </div>

            <div className="ds-item">
              <div className="ds-val">
                FDA
              </div>

              <div className="ds-key">
                Approved
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}