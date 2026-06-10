function ErrorMessage({ error }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 px-6 py-10 text-center text-sm font-medium text-red-700">
      {error}
    </div>
  )
}

export default ErrorMessage
