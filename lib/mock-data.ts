import type { Work, Note, Product } from "./types"

export const works: Work[] = [
  {
    _id: "work-1",
    title: "Find Your Place",
    date: "2023-01-15",
    excerpt: "Leverage is as much about where you are standing as how much force you are applying.",
    image: "/leverage-diagram-bw.png",
    slug: "find-your-place",
    featured: true,
  },
  {
    _id: "work-2",
    title: "Make a Name For Yourself",
    date: "2023-02-20",
    excerpt: "A great name communicates the most information in the most compressed way.",
    image: "/minimal-typography.png",
    slug: "make-a-name-for-yourself",
    featured: true,
  },
  {
    _id: "work-3",
    title: "Build Once, Sell Twice",
    date: "2023-03-10",
    excerpt: "Create assets that generate value repeatedly without additional effort.",
    image: "/placeholder-4pjns.png",
    slug: "build-once-sell-twice",
    featured: true,
  },
  {
    _id: "work-4",
    title: "The Power of Simplicity",
    date: "2023-04-05",
    excerpt: "Complexity is easy. Simplicity is hard.",
    image: "/placeholder.svg?height=600&width=600&query=minimal%20black%20and%20white%20circle%20and%20line",
    slug: "the-power-of-simplicity",
    featured: true,
  },
]

export const notes: Note[] = [
  {
    _id: "note-1",
    title: "Studio Notes #31",
    date: "2025-05-09",
    excerpt: "Thoughts on visual communication and design principles.",
    slug: "studio-notes-31",
    content: `
      <h1>Studio Notes #31</h1>
      <p>Visual thinking is a powerful tool for understanding and communicating complex ideas. When we translate concepts into visual form, we engage different parts of our brain and often discover new connections and insights that weren't apparent in verbal or written form.</p>
      
      <h2>Why Visual Thinking Works</h2>
      <ol>
        <li><strong>Pattern Recognition</strong>: Our brains are wired to recognize patterns. Visual representations make patterns more apparent.</li>
        <li><strong>Cognitive Load</strong>: Visuals can reduce cognitive load by packaging complex information into digestible formats.</li>
        <li><strong>Memory</strong>: We remember visuals better than text. Studies show that people remember only 10% of what they hear, 20% of what they read, but 80% of what they see.</li>
        <li><strong>Emotional Connection</strong>: Visuals can create an emotional connection that text alone often cannot, making ideas more memorable and impactful.</li>
      </ol>
    `,
  },
  {
    _id: "note-2",
    title: "Studio Notes #30",
    date: "2025-05-02",
    excerpt: "Understanding the crucial difference between being simple and being simplistic.",
    slug: "studio-notes-30",
    content: `
      <h1>Studio Notes #30</h1>
      <p>There's a world of difference between simplicity and being simplistic. Understanding this distinction is crucial for effective communication and problem-solving.</p>
      
      <h2>Simplicity</h2>
      <p>Simplicity is the result of deep understanding. It comes from wrestling with complexity until you can express the essence of an idea in its clearest, most accessible form. As Einstein reportedly said, "If you can't explain it simply, you don't understand it well enough."</p>
    `,
  },
  {
    _id: "note-3",
    title: "Spring Collection Release",
    date: "2025-04-29",
    excerpt: "Announcing our new spring collection of visual concepts.",
    slug: "spring-collection-release",
    content: `
      <h1>Spring Collection Release</h1>
      <p>We're excited to announce our new spring collection of visual concepts, now available in our shop.</p>
      
      <p>This collection focuses on themes of growth, renewal, and transformation - perfect for the season of new beginnings.</p>
    `,
  },
  {
    _id: "note-4",
    title: "Studio Notes #29",
    date: "2025-04-25",
    excerpt: "Exploring the relationship between form and function in visual design.",
    slug: "studio-notes-29",
    content: `
      <h1>Studio Notes #29</h1>
      <p>The relationship between form and function is at the heart of all good design. While function determines what a design does, form determines how it communicates.</p>
      
      <p>In the best designs, form and function are inseparable - the way something looks is directly related to how it works.</p>
    `,
  },
  {
    _id: "note-5",
    title: "Studio Notes #28",
    date: "2025-04-18",
    excerpt: "The power of negative space in visual composition.",
    slug: "studio-notes-28",
    content: `
      <h1>Studio Notes #28</h1>
      <p>Negative space - the empty areas around and between elements - is just as important as the elements themselves. It gives the eye a place to rest, creates balance, and can even form meaningful shapes of its own.</p>
      
      <p>Learning to see and use negative space effectively is one of the most powerful skills a visual thinker can develop.</p>
    `,
  },
  {
    _id: "note-6",
    title: "Studio Notes #27",
    date: "2025-04-11",
    excerpt: "How constraints drive creativity and innovation.",
    slug: "studio-notes-27",
    content: `
      <h1>Studio Notes #27</h1>
      <p>Constraints are often seen as limitations, but they're actually powerful drivers of creativity. When we have unlimited options, we can become paralyzed by choice. But when we have clear constraints, our minds are forced to find innovative solutions within those boundaries.</p>
      
      <p>This is why our black and white aesthetic isn't just a style choice - it's a deliberate constraint that forces clarity of thought and communication.</p>
    `,
  },
  {
    _id: "note-7",
    title: "Studio Notes #26",
    date: "2025-04-04",
    excerpt: "The importance of iteration in the creative process.",
    slug: "studio-notes-26",
    content: `
      <h1>Studio Notes #26</h1>
      <p>Great design rarely emerges fully formed. Instead, it evolves through a process of iteration - creating, testing, refining, and repeating.</p>
      
      <p>Each iteration brings the work closer to its essential form, stripping away what's unnecessary and strengthening what remains.</p>
    `,
  },
  {
    _id: "note-8",
    title: "Studio Notes #25",
    date: "2025-03-28",
    excerpt: "Finding balance between clarity and depth in visual communication.",
    slug: "studio-notes-25",
    content: `
      <h1>Studio Notes #25</h1>
      <p>One of the greatest challenges in visual communication is finding the right balance between clarity and depth. Make something too simple, and it loses meaning. Make it too complex, and it loses impact.</p>
      
      <p>The goal is to create visuals that are immediately understandable at first glance, but reward deeper contemplation with additional layers of meaning.</p>
    `,
  },
  {
    _id: "note-9",
    title: "Studio Notes #24",
    date: "2025-03-21",
    excerpt: "The role of metaphor in visual thinking.",
    slug: "studio-notes-24",
    content: `
      <h1>Studio Notes #24</h1>
      <p>Metaphors are powerful tools for understanding complex ideas by relating them to familiar concepts. In visual thinking, metaphors become even more powerful because they can be represented in ways that transcend language barriers.</p>
      
      <p>A well-chosen visual metaphor can communicate instantly what might take paragraphs to explain in words.</p>
    `,
  },
  {
    _id: "note-10",
    title: "Studio Notes #23",
    date: "2025-03-14",
    excerpt: "The ethics of visual communication in the information age.",
    slug: "studio-notes-23",
    content: `
      <h1>Studio Notes #23</h1>
      <p>As visual communicators, we have a responsibility to use our skills ethically. Visuals can clarify and illuminate, but they can also mislead and manipulate.</p>
      
      <p>In an age of information overload and misinformation, creating honest, clear visual communication is more important than ever.</p>
    `,
  },
  {
    _id: "note-11",
    title: "Studio Notes #22",
    date: "2025-03-07",
    excerpt: "The connection between visual thinking and problem-solving.",
    slug: "studio-notes-22",
    content: `
      <h1>Studio Notes #22</h1>
      <p>Visual thinking isn't just about communication - it's a powerful tool for problem-solving. When we visualize a problem, we often see solutions that weren't apparent when thinking in words alone.</p>
      
      <p>This is why sketching and diagramming are such valuable practices, even for those who don't consider themselves visual thinkers.</p>
    `,
  },
  {
    _id: "note-12",
    title: "Studio Notes #21",
    date: "2025-02-28",
    excerpt: "The evolution of our visual language and design principles.",
    slug: "studio-notes-21",
    content: `
      <h1>Studio Notes #21</h1>
      <p>Over time, we've developed a distinct visual language based on a few core principles: simplicity, contrast, and meaningful metaphor.</p>
      
      <p>This language continues to evolve as we explore new ideas and refine our understanding of visual communication, but these foundational principles remain constant.</p>
    `,
  },
]

export const products: Product[] = [
  {
    _id: "product-1",
    title: "Essential Print",
    price: 95,
    image: "/placeholder.svg?height=600&width=600&query=minimal%20black%20and%20white%20art%20print%20framed",
    description: "Our signature black and white print, perfect for home or office.",
    slug: "essential-print",
    inStock: true,
  },
  {
    _id: "product-2",
    title: "Visual Thinking: The Book",
    price: 35,
    image: "/placeholder.svg?height=600&width=600&query=minimal%20black%20book%20cover%20design",
    description: "A comprehensive guide to thinking and communicating visually.",
    slug: "visual-thinking-book",
    inStock: true,
  },
]
