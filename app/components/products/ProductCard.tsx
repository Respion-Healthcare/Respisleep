import Image from "next/image";
import Link from "next/link";

type Props = {
  product: {
    id: number | string;
    name: string;
    emoji: string;
    price: string;
    description: string;
    image?: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "410px",
          background: "#182138",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "24px",
          padding: "40px 35px 20px",
          overflow: "hidden",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        {/* IMAGE AREA */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "0",
          }}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
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
                background: "#26324a",
                fontSize: "80px",
              }}
            >
              {product.emoji}
            </div>
          )}

          {/* DARK GRADIENT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(10,20,40,0) 45%, rgba(10,20,40,0.25) 60%, rgba(10,20,40,0.95) 100%)",
            }}
          />

          {/* PRODUCT NAME */}
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "10px",
              padding: "0 5px",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: 800,
                lineHeight: 1.05,
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              {product.name}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}