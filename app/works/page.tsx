import WorkGrid from "@/components/work-grid"
import { getWorks } from "@/lib/get-content"

export default function WorksPage() {
  const works = getWorks().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <section className="mb-16 mt-12">
        <h1 className="text-4xl font-bold mb-6">Works</h1>
        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">A collection of visual concepts and ideas.</p>
      </section>

      <WorkGrid works={works} />
    </div>
  )
}
