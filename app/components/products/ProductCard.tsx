type Props = {
  product: {
    name: string;
    emoji: string;
    price: string;
    description: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="prod-card">
      <div className="prod-img">
        {product.emoji}
      </div>

      <div className="prod-body">
        <div className="prod-name">
          {product.name}
        </div>

        <div className="prod-desc">
          {product.description}
        </div>

        <div className="prod-footer">
          <div className="prod-price">
            {product.price}
          </div>

          <button className="add-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}