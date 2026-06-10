import { useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import LoadingMessage from '../components/LoadingMessage'
import ProductList from '../components/ProductList'

function HomePage() {
  // setProducts는 API 수업에서 response.data.products를 저장할 때 사용합니다.
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadProducts = async () => {
    setIsLoading(true)
    setError(null)

    // TODO: productApi.js의 getProducts 함수를 호출하세요.
    // TODO: 응답으로 받은 상품 배열을 setProducts로 저장하세요.
    // TODO: 에러가 발생하면 setError에 에러 메시지를 저장하세요.
    // API 응답 예시: { products: [{ id, title, price, thumbnail }] }

    setIsLoading(false)
  }

  useEffect(() => {
    // TODO: axios를 사용해서 상품 목록을 불러오고 products state에 저장하세요.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProducts()
  }, [])

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-slate-500">API 통신 실습</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">상품 목록</h1>
        <p className="mt-2 text-sm text-slate-600">
          파트장이 얼렁뚱땅 만들어 둔 사이트입니다. API 연동은 못했다고 하네요
        </p>
      </div>

      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && !error && <ProductList products={products} />}
    </section>
  )
}

export default HomePage
