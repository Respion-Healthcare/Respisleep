
"use client"; 

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="section-header">
        <div className="section-label">
          Product Lines
        </div>

        <div className="section-title">
          Shop by <span>Category</span>
        </div>
      </div>

      <div className="cat-grid">

        {/* CPAP */}
        <a
          className="cat-card"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="cat-icon">😮‍💨</div>

          <div className="cat-name">
            CPAP Devices
          </div>

          <div className="cat-desc">
            Continuous Positive Airway Pressure
            therapy for obstructive sleep apnea
            treatment.
          </div>

          <div className="cat-count">
            12 Products
          </div>
        </a>

        {/* BIPAP */}
        <a
          className="cat-card"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="cat-icon">🫁</div>

          <div className="cat-name">
            BiPAP / BPAP
          </div>

          <div className="cat-desc">
            Bilevel Positive Airway Pressure
            for complex sleep disordered breathing
            and ventilation support.
          </div>

          <div className="cat-count">
            8 Products
          </div>
        </a>

        {/* Oxygen */}
        <a
          className="cat-card"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="cat-icon">🫧</div>

          <div className="cat-name">
            Oxygen Concentrators
          </div>

          <div className="cat-desc">
            Portable and home-based OC units
            delivering continuous pulse-dose
            oxygen therapy.
          </div>

          <div className="cat-count">
            10 Products
          </div>
        </a>

        {/* Masks */}
        <a
          className="cat-card"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="cat-icon">🎭</div>

          <div className="cat-name">
            Masks & Interfaces
          </div>

          <div className="cat-desc">
            Full-face, nasal, and nasal pillow
            mask systems for superior comfort
            and seal.
          </div>

          <div className="cat-count">
            25 Products
          </div>
        </a>

        {/* Accessories */}
        <a
          className="cat-card"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="cat-icon">🔧</div>

          <div className="cat-name">
            Accessories
          </div>

          <div className="cat-desc">
            Tubing, humidifiers, filters,
            carrying cases, and replacement
            parts for Philips devices.
          </div>

          <div className="cat-count">
            40+ Products
          </div>
        </a>

        {/* Starter Kits */}
        <a
          className="cat-card"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="cat-icon">📦</div>

          <div className="cat-name">
            Starter Kits
          </div>

          <div className="cat-desc">
            Everything you need to start therapy —
            device, mask, humidifier and
            accessories bundled together.
          </div>

          <div className="cat-count">
            6 Bundles
          </div>
        </a>

      </div>
    </section>
  );
}