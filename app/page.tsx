import WorkGrid from "@/components/work-grid"
import { getWorks } from "@/lib/get-content"

export default function Home() {
  // Get featured works for the homepage
  const works = getWorks()
  const featuredWorks = works
    .filter((work) => work.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <section className="mb-16 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Supervisual</h1>
        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Simple, powerful ideas visualized in black and white.
        </p>
      </section>

      <WorkGrid works={featuredWorks} />
    </div>
  )
}
