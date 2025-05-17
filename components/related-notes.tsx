import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Note } from "@/lib/types"

interface RelatedNotesProps {
  notes: Note[]
  title?: string
}

export default function RelatedNotes({ notes, title = "Related Notes" }: RelatedNotesProps) {
  if (!notes.length) return null

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="space-y-6">
        {notes.map((note) => (
          <Link key={note._id} href={`/notes/${note.slug}`} className="block group">
            <h3 className="font-medium group-hover:underline">{note.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{note.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
