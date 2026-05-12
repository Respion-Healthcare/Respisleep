export default function Accessories() {
  const accessories = [
    {
      icon: "🎭",
      name: "Mask Cushions",
      price: "From ₹1,200",
    },

    {
      icon: "🌊",
      name: "Water Chambers",
      price: "₹1,800",
    },

    {
      icon: "🔧",
      name: "Headgear",
      price: "From ₹900",
    },

    {
      icon: "🪣",
      name: "CPAP Filters",
      price: "₹350 (3-pack)",
    },

    {
      icon: "🔋",
      name: "Battery Packs",
      price: "From ₹9,500",
    },

    {
      icon: "🛄",
      name: "Travel Cases",
      price: "₹2,400",
    },

    {
      icon: "🌡️",
      name: "Oximeters",
      price: "From ₹4,500",
    },

    {
      icon: "🫁",
      name: "Nasal Cannulas",
      price: "₹250/pack",
    },

    {
      icon: "🔗",
      name: "Oxygen Tubing",
      price: "₹400",
    },

    {
      icon: "💊",
      name: "CPAP Wipes",
      price: "₹650 (30-pack)",
    },
  ];

  return (
    <section
      className="acc-band"
      id="accessories"
    >
      {/* HEADER */}
      <div className="section-label">
        Quick Add
      </div>

      <div className="section-title acc-title">
        Popular <span>Accessories</span>
      </div>

      {/* ACCESSORIES */}
      <div className="acc-scroll">
        {accessories.map(
          (item, index) => (
            <div
              key={index}
              className="acc-item"
            >
              <div className="acc-item-icon">
                {item.icon}
              </div>

              <div className="acc-item-name">
                {item.name}
              </div>

              <div className="acc-item-price">
                {item.price}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}