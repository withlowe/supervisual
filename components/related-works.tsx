import Link from "next/link"
import Image from "next/image"
import type { Work } from "@/lib/types"

interface RelatedWorksProps {
  works: Work[]
  title?: string
}

export default function RelatedWorks({ works, title = "Related Works" }: RelatedWorksProps) {
  if (!works.length) return null

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work) => (
          <Link key={work._id} href={`/works/${work.slug}`} className="group flex gap-4 items-start">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 relative flex-shrink-0">
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div>
              <h3 className="font-medium group-hover:underline">{work.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{work.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
