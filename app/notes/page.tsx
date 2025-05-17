import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getNotes } from "@/lib/get-content"

export default function NotesPage() {
  const sortedNotes = getNotes().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">NOTES ARCHIVE</h1>

      <div className="space-y-0">
        {sortedNotes.map((note) => (
          <article key={note._id} className="border-b border-gray-200 dark:border-gray-800">
            <Link href={`/notes/${note.slug}`} className="flex justify-between items-center py-6 group">
              <h2 className="text-xl font-medium group-hover:underline">{note.title}</h2>
              <time className="text-sm font-mono text-gray-500 dark:text-gray-400 uppercase">
                {formatDate(note.date, "MMM D, YYYY")}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
