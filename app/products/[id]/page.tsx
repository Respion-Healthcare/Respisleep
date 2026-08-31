import Image from "next/image";
import Link from "next/link";
import { products } from "../../components/products/productsData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({
  params,
}: Props) {
  const { id } = await params;

  console.log("Product ID:", id);

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // Product doesn't exist
  if (!product) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#10182b",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <h1>Product Not Found</h1>

        <p>
          Product ID: {id}
        </p>

        <Link
          href="/"
          style={{
            marginTop: "20px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#10182b",
        color: "#fff",
        padding: "60px 5%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* BACK */}
        <Link
          href="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          ← Back
        </Link>

        {/* DETAILS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "60px",
            marginTop: "40px",
            alignItems: "center",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "550px",
              background: "#182138",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="50vw"
                style={{
                  objectFit: "contain",
                  padding: "30px",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "120px",
                }}
              >
                {product.emoji}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div>
            <p
              style={{
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 700,
                color: "#8fa8ff",
              }}
            >
              {product.category}
            </p>

            <h1
              style={{
                fontSize: "48px",
                lineHeight: "1.1",
                margin: "15px 0",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#b8c0d0",
              }}
            >
              {product.description}
            </p>

            <h2
              style={{
                fontSize: "32px",
                marginTop: "25px",
              }}
            >
              {product.price}
            </h2>

           <a
  href={`https://wa.me/919937000606?text=${encodeURIComponent(
    `Hello, I am interested in ${product.name}. Please provide me with more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "25px",
    padding: "15px 35px",
    background: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 700,
    textDecoration: "none",
  }}
>
  Enquire Now
</a>
          </div>
        </div>
      </div>
    </main>
  );
}