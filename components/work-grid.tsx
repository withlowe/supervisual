import Image from "next/image"
import Link from "next/link"
import type { Work } from "@/lib/types"

interface WorkGridProps {
  works: Work[]
}

export default function WorkGrid({ works }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
      {works.map((work) => (
        <Link key={work._id} href={`/works/${work.slug}`} className="block group">
          <div className="aspect-square bg-gray-100 dark:bg-gray-900 mb-8 relative overflow-hidden">
            <Image
              src={work.image || "/placeholder.svg"}
              alt={work.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 group-hover:underline">{work.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">{work.excerpt}</p>
        </Link>
      ))}
    </div>
  )
}
