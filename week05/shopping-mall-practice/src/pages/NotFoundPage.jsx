import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
      <p className="text-sm font-semibold text-slate-500">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">페이지를 찾을 수 없습니다.</h1>
      <p className="mt-3 text-sm text-slate-500">요청한 주소가 올바른지 확인해주세요.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        홈으로 이동
      </Link>
    </section>
  )
}

export default NotFoundPage
