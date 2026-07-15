export default function ProductCardSkeleton() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-3 shadow-sm animate-pulse">
      {/* Product Image */}
      <div className="aspect-square rounded-2xl bg-gray-200" />

      {/* Product Name */}
      <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

      {/* Telugu Name */}
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />

      {/* Price */}
      <div className="mt-4 h-5 w-1/3 rounded bg-gray-200" />

      {/* Weight Buttons */}
      <div className="mt-5 flex gap-2">
        <div className="h-8 w-12 rounded bg-gray-200" />
        <div className="h-8 w-12 rounded bg-gray-200" />
        <div className="h-8 w-12 rounded bg-gray-200" />
      </div>

      {/* Add to Cart */}
      <div className="mt-6 h-10 rounded-xl bg-gray-200" />
    </div>
  );
}