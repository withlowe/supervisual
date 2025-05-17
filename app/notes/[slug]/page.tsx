import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import RelatedNotes from "@/components/related-notes"
import { getNoteBySlug, getRelatedNotes } from "@/lib/get-content"

interface NotePageProps {
  params: {
    slug: string
  }
}

export default function NotePage({ params }: NotePageProps) {
  const note = getNoteBySlug(params.slug)

  if (!note) {
    notFound()
  }

  // Get related notes
  const relatedNotes = getRelatedNotes(note)

  return (
    <article className="max-w-2xl mx-auto py-12">

      <div className="mb-8">
        <time className="text-sm font-mono text-gray-500 dark:text-gray-400 block mb-4">{formatDate(note.date)}</time>

          <Mdx code={note.body.code} />

        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {note.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Related Notes */}
      <RelatedNotes notes={relatedNotes} />
    </article>
  )
}
