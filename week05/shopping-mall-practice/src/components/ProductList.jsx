import EmptyMessage from './EmptyMessage'

function ProductList({ products }) {
  if (products.length === 0) {
    return <EmptyMessage />
  }

  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
      {/* TODO: products.map을 사용해서 상품 목록 UI를 렌더링하세요. */}
      {/* TODO: 각 상품에는 반드시 key={product.id}를 넣어주세요. */}
      상품 목록 렌더링 코드를 작성하세요.
    </div>
  )
}

export default ProductList
