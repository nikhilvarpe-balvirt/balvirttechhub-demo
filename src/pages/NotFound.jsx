import Button from '../components/shared/Button'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page Not Found', undefined)

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-brand-950">404</h1>
      <p className="mt-4 text-lg text-slate-600">Sorry, we couldn't find the page you're looking for.</p>
      <div className="mt-8">
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  )
}
