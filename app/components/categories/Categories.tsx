"use client";

import Link from "next/link";

const categories = [
  {
    name: "CPAP Devices",
    slug: "cpap",
    image: "/images/categories/cpap.webp",
    icon: "😮‍💨",
    description:
      "Continuous Positive Airway Pressure therapy for obstructive sleep apnea treatment.",
    count: "12 Products",
  },
  {
    name: "BiPAP / BPAP",
    slug: "bipap",
    image: "/images/categories/bipap.webp",
    icon: "🫁",
    description:
      "Bilevel Positive Airway Pressure for complex sleep disordered breathing and ventilation support.",
    count: "8 Products",
  },
  {
    name: "Oxygen Concentrators",
    slug: "oxygen-concentrators",
    image: "/images/categories/oxygen.jpg",
    icon: "🫧",
    description:
      "Portable and home-based oxygen concentrators delivering continuous oxygen therapy.",
    count: "10 Products",
  },
  {
    name: "Masks & Interfaces",
    slug: "masks",
    image: "/images/categories/mask.webp",
    icon: "🎭",
    description:
      "Full-face, nasal, and nasal pillow mask systems for superior comfort and seal.",
    count: "25 Products",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/images/categories/accessories.jpg",
    icon: "🔧",
    description:
      "Tubing, humidifiers, filters, carrying cases, and replacement parts.",
    count: "40+ Products",
  },
  {
    name: "Starter Kits",
    slug: "starter-kits",
    image: "/images/categories/bed.jpg",
    icon: "📦",
    description:
      "Everything you need to start therapy — device, mask, humidifier and accessories.",
    count: "6 Bundles",
  },
];

export default function Categories() {
  return (
    <>
      <section className="categories" id="categories">

        {/* HEADER */}
        <div className="section-header">
          <div className="section-label">
            Product Lines
          </div>

          <div className="section-title">
            Shop by <span>Category</span>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="cat-grid">

          {categories.map((category) => (
            <Link
              href={`/categories/${category.slug}`}
              key={category.slug}
              className="category-card"
            >

              {/* IMAGE */}
              <div className="category-image">

                <img
                  src={category.image}
                  alt={category.name}
                />

                <span className="category-icon">
                  {category.icon}
                </span>

              </div>

              {/* CONTENT */}
              <div className="category-content">

                <h3>
                  {category.name}
                </h3>

                <p>
                  {category.description}
                </p>

                {/* FOOTER */}
                <div className="category-footer">

                  <span>
                    {category.count}
                  </span>

                  <span className="category-arrow">
                    →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* ================= CSS ================= */}

      <style jsx>{`

        /* SECTION */

        .categories {
          width: 100%;
          padding: 80px 6%;
          background: #f8fafc;
        }


        /* HEADER */

        .section-header {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-label {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #111827;
        }

        .section-title span {
          color: #2563eb;
        }


        /* GRID */

        .cat-grid {
          max-width: 1300px;
          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 28px;
        }


        /* CARD */

        .category-card {
          display: block;

          background: #ffffff;

          border-radius: 22px;

          overflow: hidden;

          text-decoration: none;

          color: inherit;

          border: 1px solid #e5e7eb;

          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.06);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;

          cursor: pointer;
        }


        /* CARD HOVER */

        .category-card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.12);
        }


        /* IMAGE */

        .category-image {
          position: relative;

          width: 100%;

          height: 230px;

          overflow: hidden;
        }


        .category-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition:
            transform 0.5s ease;
        }


        /* IMAGE ZOOM */

        .category-card:hover .category-image img {
          transform: scale(1.08);
        }


        /* IMAGE DARK OVERLAY */

        .category-image::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.02),
              rgba(0, 0, 0, 0.35)
            );

          pointer-events: none;
        }


        /* ICON */

        .category-icon {
          position: absolute;

          top: 18px;
          right: 18px;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255, 255, 255, 0.92);

          border-radius: 50%;

          font-size: 24px;

          z-index: 2;

          box-shadow:
            0 5px 15px rgba(0, 0, 0, 0.12);

          backdrop-filter: blur(8px);

          transition:
            transform 0.3s ease;
        }


        .category-card:hover .category-icon {
          transform: rotate(8deg) scale(1.08);
        }


        /* CONTENT */

        .category-content {
          padding: 24px;
        }


        .category-content h3 {
          margin: 0 0 10px;

          font-size: 21px;

          font-weight: 750;

          color: #111827;
        }


        .category-content p {
          margin: 0;

          color: #6b7280;

          font-size: 15px;

          line-height: 1.6;

          min-height: 72px;
        }


        /* FOOTER */

        .category-footer {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-top: 22px;

          color: #2563eb;

          font-size: 14px;

          font-weight: 700;
        }


        /* ARROW */

        .category-arrow {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #2563eb;

          color: #ffffff;

          font-size: 21px;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }


        .category-card:hover .category-arrow {
          transform: translateX(6px);

          background: #1d4ed8;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {

          .cat-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .section-title {
            font-size: 36px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .categories {
            padding: 60px 20px;
          }

          .cat-grid {
            grid-template-columns: 1fr;

            gap: 22px;
          }

          .section-title {
            font-size: 30px;
          }

          .category-image {
            height: 210px;
          }

          .category-content {
            padding: 20px;
          }

          .category-content p {
            min-height: auto;
          }

        }

      `}</style>
    </>
  );
}