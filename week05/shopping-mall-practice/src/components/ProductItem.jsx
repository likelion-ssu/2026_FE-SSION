function ProductItem({ product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full bg-slate-100 object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase text-slate-500">{product.category}</p>
          <p className="text-xs font-medium text-slate-500">평점 {product.rating}</p>
        </div>
        <h2 className="text-lg font-bold text-slate-900">{product.title}</h2>
        <p className="line-clamp-2 text-sm text-slate-500">{product.description}</p>
        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-slate-900">${product.price}</p>
            <p className="text-xs text-slate-500">재고 {product.stock}개</p>
          </div>
          <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {product.availabilityStatus}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductItem
