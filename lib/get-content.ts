import type { Work, Note, Product } from "@/lib/types"

// Mock data for when Contentlayer isn't available (like in preview environments)
export const mockWorks: Work[] = [
  {
    _id: "work-1",
    title: "Find Your Place",
    date: "2023-01-15",
    excerpt: "Leverage is as much about where you are standing as how much force you are applying.",
    image: "/leverage-diagram-bw.png",
    slug: "find-your-place",
    featured: true,
    body: {
      code: `
        <h1>Find Your Place</h1>
        <p>Leverage is as much about where you are standing as how much force you are applying.</p>
        <p>The most effective people understand that positioning is often more important than effort. They focus on finding the right place to apply their skills and energy, rather than simply working harder in a suboptimal position.</p>
        <h2>The Power of Position</h2>
        <p>When Archimedes said, "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world," he wasn't just talking about physics. He was describing a universal principle that applies to all forms of influence and impact.</p>
      `,
    },
  },
  {
    _id: "work-2",
    title: "Make a Name For Yourself",
    date: "2023-02-20",
    excerpt: "A great name communicates the most information in the most compressed way.",
    image: "/minimal-typography.png",
    slug: "make-a-name-for-yourself",
    featured: true,
    body: {
      code: `
        <h1>Make a Name For Yourself</h1>
        <p>A great name communicates the most information in the most compressed way.</p>
        <p>Your name is your brand. It's how people find you, remember you, and talk about you when you're not in the room. The best names are simple, memorable, and convey the essence of what you do or who you are.</p>
      `,
    },
  },
  {
    _id: "work-3",
    title: "Build Once, Sell Twice",
    date: "2023-03-10",
    excerpt: "Create assets that generate value repeatedly without additional effort.",
    image: "/placeholder-h91ub.png",
    slug: "build-once-sell-twice",
    featured: true,
    body: {
      code: `
        <h1>Build Once, Sell Twice</h1>
        <p>The most valuable assets are those that can be created once and sold repeatedly.</p>
        <p>Digital products, intellectual property, and systems that scale without proportional increases in cost or effort are the foundation of wealth creation in the modern economy.</p>
      `,
    },
  },
  {
    _id: "work-4",
    title: "The Power of Simplicity",
    date: "2023-04-05",
    excerpt: "Complexity is easy. Simplicity is hard.",
    image: "/placeholder-u6fok.png",
    slug: "the-power-of-simplicity",
    featured: true,
    body: {
      code: `
        <h1>The Power of Simplicity</h1>
        <p>Complexity is easy. Simplicity is hard.</p>
        <p>Anyone can make something complicated. It takes real skill and understanding to distill an idea to its essence. The most powerful concepts can often be expressed in the simplest terms.</p>
      `,
    },
  },
]

export const mockNotes: Note[] = [
  {
    _id: "note-1",
    title: "Studio Notes #31",
    date: "2025-05-09",
    excerpt: "Thoughts on visual communication and design principles.",
    slug: "studio-notes-31",
    tags: ["design", "communication", "principles"],
    body: {
      code: `
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
  },
  {
    _id: "note-2",
    title: "Studio Notes #30",
    date: "2025-05-02",
    excerpt: "Understanding the crucial difference between being simple and being simplistic.",
    slug: "studio-notes-30",
    tags: ["simplicity", "design", "thinking"],
    body: {
      code: `
        <h1>Studio Notes #30</h1>
        <p>There's a world of difference between simplicity and being simplistic. Understanding this distinction is crucial for effective communication and problem-solving.</p>
        <h2>Simplicity</h2>
        <p>Simplicity is the result of deep understanding. It comes from wrestling with complexity until you can express the essence of an idea in its clearest, most accessible form. As Einstein reportedly said, "If you can't explain it simply, you don't understand it well enough."</p>
      `,
    },
  },
  {
    _id: "note-3",
    title: "Spring Collection Release",
    date: "2025-04-29",
    excerpt: "Announcing our new spring collection of visual concepts.",
    slug: "spring-collection-release",
    tags: ["announcement", "collection"],
    body: {
      code: `
        <h1>Spring Collection Release</h1>
        <p>We're excited to announce our new spring collection of visual concepts, now available in our shop.</p>
        <p>This collection focuses on themes of growth, renewal, and transformation - perfect for the season of new beginnings.</p>
      `,
    },
  },
  {
    _id: "note-4",
    title: "Studio Notes #29",
    date: "2025-04-25",
    excerpt: "Exploring the relationship between form and function in visual design.",
    slug: "studio-notes-29",
    tags: ["design", "form", "function"],
    body: {
      code: `
        <h1>Studio Notes #29</h1>
        <p>The relationship between form and function is at the heart of all good design. While function determines what a design does, form determines how it communicates.</p>
        <p>In the best designs, form and function are inseparable - the way something looks is directly related to how it works.</p>
      `,
    },
  },
]

export const mockProducts: Product[] = [
  {
    _id: "product-1",
    title: "Essential Print",
    price: 95,
    image: "/placeholder-nm9h4.png",
    description: "Our signature black and white print, perfect for home or office.",
    slug: "essential-print",
    inStock: true,
    dimensions: '18" x 24"',
    materials: ["Museum-quality matte paper", "Archival ink"],
    body: {
      code: `
        <h1>Essential Print</h1>
        <p>Our signature black and white print, perfect for home or office. This minimalist design captures the essence of visual thinking in a timeless format that complements any space.</p>
        <h2>Details</h2>
        <ul>
          <li>Museum-quality matte paper</li>
          <li>Archival ink</li>
          <li>Available in multiple sizes</li>
          <li>Ships in protective tube</li>
          <li>Frame not included</li>
        </ul>
      `,
    },
  },
  {
    _id: "product-2",
    title: "Visual Thinking: The Book",
    price: 35,
    image: "/placeholder.svg?height=600&width=600&query=minimal%20black%20book%20cover%20design",
    description: "A comprehensive guide to thinking and communicating visually.",
    slug: "visual-thinking-book",
    inStock: true,
    dimensions: '7" x 9", 240 pages',
    materials: ["Hardcover", "Premium paper", "Soy-based ink"],
    body: {
      code: `
        <h1>Visual Thinking: The Book</h1>
        <p>A comprehensive guide to thinking and communicating visually. This book distills years of experience into practical techniques anyone can use to clarify their thinking and communicate more effectively.</p>
        <h2>What's Inside</h2>
        <ul>
          <li>The principles of visual thinking</li>
          <li>Techniques for translating complex ideas into simple visuals</li>
          <li>Case studies of successful visual communication</li>
          <li>Exercises to develop your visual thinking skills</li>
          <li>Templates and frameworks you can apply immediately</li>
        </ul>
      `,
    },
  },
]

// Function to get works with fallback to mock data
export function getWorks() {
  try {
    // Try to import from contentlayer
    const { allWorks } = require("contentlayer/generated")
    return allWorks
  } catch (error) {
    // Fallback to mock data if contentlayer is not available
    return mockWorks
  }
}

// Function to get notes with fallback to mock data
export function getNotes() {
  try {
    const { allNotes } = require("contentlayer/generated")
    return allNotes
  } catch (error) {
    return mockNotes
  }
}

// Function to get products with fallback to mock data
export function getProducts() {
  try {
    const { allProducts } = require("contentlayer/generated")
    return allProducts
  } catch (error) {
    return mockProducts
  }
}

// Function to get a single work by slug
export function getWorkBySlug(slug: string) {
  const works = getWorks()
  return works.find((work) => work.slug === slug)
}

// Function to get a single note by slug
export function getNoteBySlug(slug: string) {
  const notes = getNotes()
  return notes.find((note) => note.slug === slug)
}

// Function to get a single product by slug
export function getProductBySlug(slug: string) {
  const products = getProducts()
  return products.find((product) => product.slug === slug)
}

// Function to get related works based on tags or date proximity
export function getRelatedWorks(currentWork: Work, limit = 2) {
  const works = getWorks()

  // Filter out the current work
  const otherWorks = works.filter((work) => work._id !== currentWork._id)

  // Sort by date proximity (closest dates first)
  const currentDate = new Date(currentWork.date).getTime()
  const sortedWorks = otherWorks.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return Math.abs(dateA - currentDate) - Math.abs(dateB - currentDate)
  })

  return sortedWorks.slice(0, limit)
}

// Function to get related notes based on tags
export function getRelatedNotes(currentNote: Note, limit = 2) {
  const notes = getNotes()

  // Filter out the current note
  const otherNotes = notes.filter((note) => note._id !== currentNote._id)

  // If the current note has tags, prioritize notes with matching tags
  if (currentNote.tags && currentNote.tags.length > 0) {
    // Sort by number of matching tags (most matches first)
    return otherNotes
      .map((note) => {
        const matchingTags = (note.tags || []).filter((tag) => currentNote.tags.includes(tag)).length
        return { note, matchingTags }
      })
      .sort((a, b) => b.matchingTags - a.matchingTags)
      .slice(0, limit)
      .map((item) => item.note)
  }

  // If no tags, sort by date proximity
  const currentDate = new Date(currentNote.date).getTime()
  const sortedNotes = otherNotes.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return Math.abs(dateA - currentDate) - Math.abs(dateB - currentDate)
  })

  return sortedNotes.slice(0, limit)
}

// Function to get related products
export function getRelatedProducts(currentProduct: Product, limit = 2) {
  const products = getProducts()

  // Filter out the current product
  const otherProducts = products.filter((product) => product._id !== currentProduct._id)

  // Sort by price similarity (closest prices first)
  const sortedProducts = otherProducts.sort((a, b) => {
    return Math.abs(a.price - currentProduct.price) - Math.abs(b.price - currentProduct.price)
  })

  return sortedProducts.slice(0, limit)
}
