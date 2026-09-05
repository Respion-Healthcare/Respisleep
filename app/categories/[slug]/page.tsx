"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

interface Product {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  price?: number;
  image?: string;
  brand?: string;
  stock?: number;
}

export default function CategoryPage() {
  const params = useParams();

  const slug = params.slug as string;

  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `http://localhost:4001/api/products/category/${slug}`
        );

        console.log("API RESPONSE:", response.data);

        if (response.data.success) {
          setCategory(response.data.category);
          setProducts(response.data.products || []);
        } else {
          setError("Category not found");
        }
      } catch (error) {
        console.error("Error fetching category:", error);

        setError(
          "Unable to load products. Please check your backend server."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [slug]);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>

        <p>Loading products...</p>

        <style jsx>{`
          .loading-container {
            min-height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .loader {
            width: 45px;
            height: 45px;
            border: 4px solid #e5e7eb;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          .loading-container p {
            margin-top: 15px;
            color: #6b7280;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>

        <h2>{error}</h2>

        <p>
          We couldn't load the products for this category.
        </p>

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

        {/* ================= CATEGORY HEADER ================= */}

        <section className="category-header">

          <div className="breadcrumb">
            <Link href="/">Home</Link>

            <span> / </span>

            <span>{category?.name}</span>
          </div>

          <div className="category-label">
            PRODUCT CATEGORY
          </div>

          <h1>
            {category?.name}
          </h1>

          <p>
            {category?.description ||
              `Explore our ${category?.name} products.`}
          </p>

        </section>


        {/* ================= PRODUCTS ================= */}

        <section className="products-section">

          <div className="products-heading">

            <div>
              <h2>
                {category?.name}
              </h2>

              <span>
                {products.length} Products
              </span>
            </div>

          </div>


          {products.length === 0 ? (

            <div className="no-products">

              <div className="empty-icon">
                📦
              </div>

              <h3>
                No Products Available
              </h3>

              <p>
                There are currently no products in this category.
              </p>

            </div>

          ) : (

            <div className="products-grid">

              {products.map((product) => (

                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="product-card"
                >

                  {/* IMAGE */}

                  <div className="product-image-container">

                    {product.image ? (

                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />

                    ) : (

                      <div className="no-image">
                        No Image
                      </div>

                    )}

                  </div>


                  {/* CONTENT */}

                  <div className="product-content">

                    {product.brand && (
                      <div className="product-brand">
                        {product.brand}
                      </div>
                    )}

                    <h3>
                      {product.name}
                    </h3>

                    {product.description && (
                      <p>
                        {product.description}
                      </p>
                    )}


                    <div className="product-bottom">

                      {product.price !== undefined &&
                        product.price !== null && (

                          <span className="price">
                            ₹{Number(product.price).toLocaleString("en-IN")}
                          </span>

                        )}

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


      {/* ================= CSS ================= */}

      <style jsx>{`

        .category-page {
          min-height: 100vh;
          background: #f8fafc;
          padding-bottom: 80px;
        }


        /* HEADER */

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


        /* PRODUCTS SECTION */

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


        /* GRID */

        .products-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 25px;
        }


        /* PRODUCT CARD */

        .product-card {
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

          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.10);
        }


        /* IMAGE */

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

          transition:
            transform 0.4s ease;
        }


        .product-card:hover .product-image {
          transform: scale(1.06);
        }


        .no-image {
          color: #9ca3af;
          font-size: 14px;
        }


        /* CONTENT */

        .product-content {
          padding: 20px;
        }


        .product-brand {
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;

          margin-bottom: 7px;
        }


        .product-content h3 {
          margin: 0 0 10px;

          font-size: 18px;
          font-weight: 700;

          color: #111827;
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


        /* BOTTOM */

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


        /* EMPTY */

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


        /* TABLET */

        @media (max-width: 1100px) {

          .products-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

        }


        /* TABLET */

        @media (max-width: 800px) {

          .products-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .category-header h1 {
            font-size: 38px;
          }

        }


        /* MOBILE */

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