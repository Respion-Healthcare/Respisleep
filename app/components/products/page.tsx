export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}