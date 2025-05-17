export interface Work {
  _id: string
  title: string
  date: string
  excerpt: string
  image: string
  slug: string
  featured: boolean
  body: {
    code: string
  }
}

export interface Note {
  _id: string
  title: string
  date: string
  excerpt: string
  slug: string
  tags?: string[]
  body: {
    code: string
  }
}

export interface Product {
  _id: string
  title: string
  price: number
  image: string
  description: string
  slug: string
  inStock: boolean
  dimensions?: string
  materials?: string[]
  body: {
    code: string
  }
}
