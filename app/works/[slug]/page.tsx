import Image from "next/image"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import RelatedWorks from "@/components/related-works"
import { getWorkBySlug, getRelatedWorks } from "@/lib/get-content"

interface WorkPageProps {
  params: {
    slug: string
  }
}

export default function WorkPage({ params }: WorkPageProps) {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  // Get related works
  const relatedWorks = getRelatedWorks(work)

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="aspect-square bg-gray-100 dark:bg-gray-900 relative mb-12 max-w-2xl mx-auto">
        <Image
          src={work.image || "/placeholder.svg"}
          alt={work.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        <time className="text-sm font-mono text-gray-500 dark:text-gray-400 block">{formatDate(work.date)}</time>

        <Mdx code={work.body.code} />

        {/* Related Works */}
        <RelatedWorks works={relatedWorks} />
      </div>
    </div>
  )
}
