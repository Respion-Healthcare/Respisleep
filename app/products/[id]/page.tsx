import Image from "next/image";
import Link from "next/link";
import { products } from "../../components/products/productsData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <>
        <main className="not-found">
          <h1>Product Not Found</h1>

          <p>Product ID: {id}</p>

          <Link href="/" className="back-home">
            ← Back to Home
          </Link>
        </main>

        <style>{`
          .not-found {
            min-height: 100vh;
            background: #10182b;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
          }

          .not-found h1 {
            font-size: 40px;
            margin-bottom: 10px;
          }

          .not-found p {
            color: #b8c0d0;
          }

          .back-home {
            margin-top: 20px;
            color: #fff;
            text-decoration: none;
            font-weight: 600;
          }

          @media (max-width: 600px) {
            .not-found h1 {
              font-size: 30px;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <main className="product-page">
        <div className="product-container">

          {/* BACK BUTTON */}
          <Link href="/" className="back-link">
            ← Back
          </Link>

          {/* PRODUCT DETAILS */}
          <div className="product-details">

            {/* PRODUCT IMAGE */}
            <div className="product-image-box">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="product-image"
                />
              ) : (
                <div className="emoji-image">
                  {product.emoji || "📦"}
                </div>
              )}
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="product-info">

              {/* CATEGORY */}
              <p className="product-category">
                {product.category}
              </p>

              {/* NAME */}
              <h1>{product.name}</h1>

              {/* DESCRIPTION */}
              {product.description && (
                <p className="description">
                  {product.description}
                </p>
              )}

              {/* SPECS */}
              {product.specs &&
                product.specs.length > 0 && (
                  <div className="specs">
                    {product.specs.map(
                      (spec, index) => (
                        <span key={index}>
                          {spec}
                        </span>
                      )
                    )}
                  </div>
                )}

              {/* PRICE */}
              <h2 className="price">
                {product.price}
              </h2>

              {/* BUTTONS */}
              <div className="buttons">

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/919937000606?text=${encodeURIComponent(
                    `Hello, I am interested in ${product.name}. Please provide me with more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enquire-button"
                >
                  💬 Enquire Now
                </a>

                {/* CALL */}
                <a
                  href="tel:+919937000606"
                  className="call-button"
                >
                  📞 Call Us
                </a>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RESPONSIVE CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .product-page {
          min-height: 100vh;
          background: #10182b;
          color: #fff;
          padding: 60px 5%;
        }

        .product-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* BACK */

        .back-link {
          display: inline-block;
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 40px;
          transition: opacity 0.2s ease;
        }

        .back-link:hover {
          opacity: 0.7;
        }

        /* MAIN PRODUCT GRID */

        .product-details {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 60px;
          align-items: center;
        }

        /* IMAGE */

        .product-image-box {
          position: relative;
          width: 100%;
          height: 550px;
          background: #182138;
          border-radius: 24px;
          overflow: hidden;
        }

        .product-image {
          object-fit: contain;
          padding: 30px;
        }

        .emoji-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 120px;
        }

        /* PRODUCT INFO */

        .product-info {
          width: 100%;
        }

        .product-category {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #8fa8ff;
          margin: 0 0 15px;
        }

        .product-info h1 {
          font-size: 48px;
          line-height: 1.1;
          margin: 0 0 20px;
          font-weight: 800;
          word-break: break-word;
        }

        .description {
          font-size: 18px;
          line-height: 1.7;
          color: #b8c0d0;
          margin: 0;
        }

        /* SPECS */

        .specs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
        }

        .specs span {
          background: #1c2944;
          color: #dce3f5;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        /* PRICE */

        .price {
          font-size: 32px;
          margin: 25px 0 0;
          font-weight: 800;
        }

        /* BUTTONS */

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .enquire-button,
        .call-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .enquire-button {
          background: #25d366;
          color: #fff;
        }

        .call-button {
          background: #2563eb;
          color: #fff;
        }

        .enquire-button:hover,
        .call-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .product-page {
            padding: 50px 30px;
          }

          .product-details {
            gap: 35px;
          }

          .product-image-box {
            height: 450px;
          }

          .product-info h1 {
            font-size: 38px;
          }

          .description {
            font-size: 16px;
          }

          .price {
            font-size: 28px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .product-page {
            padding: 30px 18px 50px;
          }

          .back-link {
            margin-bottom: 25px;
            font-size: 15px;
          }

          .product-details {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .product-image-box {
            height: 380px;
            border-radius: 18px;
          }

          .product-image {
            padding: 20px;
          }

          .product-info h1 {
            font-size: 32px;
            line-height: 1.2;
          }

          .product-category {
            font-size: 12px;
          }

          .description {
            font-size: 16px;
            line-height: 1.6;
          }

          .price {
            font-size: 28px;
            margin-top: 22px;
          }

          .specs {
            gap: 7px;
            margin-top: 20px;
          }

          .specs span {
            font-size: 12px;
            padding: 7px 10px;
          }

          .buttons {
            flex-direction: column;
            width: 100%;
          }

          .enquire-button,
          .call-button {
            width: 100%;
            padding: 15px 20px;
            font-size: 15px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {
          .product-page {
            padding: 25px 14px 40px;
          }

          .product-image-box {
            height: 300px;
            border-radius: 16px;
          }

          .product-image {
            padding: 15px;
          }

          .product-info h1 {
            font-size: 27px;
          }

          .description {
            font-size: 15px;
            line-height: 1.6;
          }

          .product-category {
            font-size: 11px;
          }

          .price {
            font-size: 25px;
          }

          .emoji-image {
            font-size: 80px;
          }

          .enquire-button,
          .call-button {
            padding: 14px 20px;
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}