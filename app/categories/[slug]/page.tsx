"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/app/components/products/productsData";

type Product = {
  id: number;
  category: string;
  name: string;
  price: string;
  image?: string;
  emoji?: string;
  tag?: string;
  specs?: string[];
  description?: string;
};

const categoryInfo: Record<
  string,
  {
    name: string;
    description: string;
  }
> = {
  cpap: {
    name: "CPAP Devices",
    description:
      "Advanced CPAP machines designed for comfortable and effective sleep therapy.",
  },

  bipap: {
    name: "BiPAP Devices",
    description:
      "Advanced bilevel ventilation devices for different respiratory therapy needs.",
  },

  oc: {
    name: "Oxygen Concentrators",
    description:
      "Reliable oxygen concentrators for convenient and continuous oxygen therapy.",
  },

  mask: {
    name: "CPAP & BiPAP Masks",
    description:
      "Comfortable and reliable masks designed for effective sleep therapy.",
  },

  accessory: {
    name: "Accessories",
    description:
      "Essential accessories and replacement parts for CPAP and respiratory devices.",
  },
};

export default function CategoryPage() {
  const params = useParams();

  const slug = params.slug as string;

  const category = categoryInfo[slug];

  const categoryProducts: Product[] = products.filter(
    (product) => product.category === slug
  );

  if (!category) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>

        <h2>Category Not Found</h2>

        <p>We couldn't find the category you're looking for.</p>

        <Link href="/" className="back-button">
          ← Back to Home
        </Link>

        <style jsx>{`
          .error-container {
            min-height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 30px;
          }

          .error-icon {
            font-size: 50px;
            margin-bottom: 15px;
          }

          .error-container h2 {
            color: #111827;
            margin-bottom: 8px;
          }

          .error-container p {
            color: #6b7280;
          }

          .back-button {
            margin-top: 20px;
            padding: 12px 24px;
            background: #2563eb;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <main className="category-page">
        <section className="category-header">
          <div className="breadcrumb">
            <Link href="/">Home</Link>

            <span>/</span>

            <span>{category.name}</span>
          </div>

          <div className="category-label">PRODUCT CATEGORY</div>

          <h1>{category.name}</h1>

          <p>{category.description}</p>
        </section>

        <section className="products-section">
          <div className="products-heading">
            <div>
              <h2>{category.name}</h2>

              <span>
                {categoryProducts.length}{" "}
                {categoryProducts.length === 1 ? "Product" : "Products"}
              </span>
            </div>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="no-products">
              <div className="empty-icon">📦</div>

              <h3>No Products Available</h3>

              <p>
                There are currently no products in this category.
              </p>
            </div>
          ) : (
            <div className="products-grid">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="product-card"
                >
                  <div className="product-image-container">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                    ) : (
                      <div className="emoji-image">
                        {product.emoji || "📦"}
                      </div>
                    )}
                  </div>

                  {product.tag && (
                    <div className="product-tag">
                      {product.tag}
                    </div>
                  )}

                  <div className="product-content">
                    <h3>{product.name}</h3>

                    {product.description && (
                      <p>{product.description}</p>
                    )}

                    {product.specs &&
                      product.specs.length > 0 && (
                        <div className="specs">
                          {product.specs
                            .slice(0, 3)
                            .map((spec, index) => (
                              <span key={index}>{spec}</span>
                            ))}
                        </div>
                      )}

                    <div className="product-bottom">
                      <span className="price">
                        {product.price}
                      </span>

                      <span className="view-product">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <style jsx>{`
        .category-page {
          min-height: 100vh;
          background: #f8fafc;
          padding-bottom: 80px;
        }

        .category-header {
          text-align: center;
          padding: 70px 20px 60px;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .breadcrumb {
          margin-bottom: 30px;
          font-size: 14px;
          color: #6b7280;
        }

        .breadcrumb a {
          color: #2563eb;
          text-decoration: none;
        }

        .breadcrumb span {
          margin: 0 5px;
        }

        .category-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #2563eb;
          margin-bottom: 12px;
        }

        .category-header h1 {
          margin: 0;
          font-size: 46px;
          font-weight: 800;
          color: #111827;
        }

        .category-header p {
          max-width: 700px;
          margin: 18px auto 0;
          color: #6b7280;
          font-size: 17px;
          line-height: 1.7;
        }

        .products-section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 25px;
        }

        .products-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .products-heading h2 {
          margin: 0 0 5px;
          font-size: 28px;
          color: #111827;
        }

        .products-heading span {
          color: #6b7280;
          font-size: 14px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 25px;
        }

        .product-card {
          position: relative;
          background: white;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          border: 1px solid #e5e7eb;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .product-image-container {
          height: 240px;
          background: #f9fafb;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 20px;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.06);
        }

        .emoji-image {
          font-size: 80px;
        }

        .product-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #2563eb;
          color: white;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .product-content {
          padding: 20px;
        }

        .product-content h3 {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          line-height: 1.4;
        }

        .product-content p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.5;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .specs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 15px;
        }

        .specs span {
          background: #f1f5f9;
          color: #475569;
          padding: 5px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
        }

        .product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .price {
          font-size: 18px;
          font-weight: 800;
          color: #111827;
        }

        .view-product {
          font-size: 14px;
          font-weight: 700;
          color: #2563eb;
        }

        .no-products {
          text-align: center;
          background: white;
          border-radius: 18px;
          padding: 80px 20px;
          border: 1px solid #e5e7eb;
        }

        .empty-icon {
          font-size: 50px;
          margin-bottom: 15px;
        }

        .no-products h3 {
          margin: 0 0 8px;
          font-size: 22px;
          color: #111827;
        }

        .no-products p {
          margin: 0;
          color: #6b7280;
        }

        @media (max-width: 1100px) {
          .products-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 800px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .category-header h1 {
            font-size: 38px;
          }
        }

        @media (max-width: 550px) {
          .category-header {
            padding: 50px 20px 45px;
          }

          .category-header h1 {
            font-size: 30px;
          }

          .category-header p {
            font-size: 15px;
          }

          .products-section {
            padding: 40px 15px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .product-image-container {
            height: 260px;
          }
        }
      `}</style>
    </>
  );
}