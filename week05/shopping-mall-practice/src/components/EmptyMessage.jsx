function EmptyMessage() {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
      <p className="text-base font-semibold text-slate-900">상품을 찾을 수 없습니다.</p>
      <p className="mt-2 text-sm text-slate-500">
        상품 데이터를 불러오면 이 영역에 상품 목록이 표시됩니다.
      </p>
    </div>
  )
}

export default EmptyMessage
