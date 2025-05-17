import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { getProducts } from "@/lib/get-content"

export default function ShopPage() {
  const products = getProducts().sort((a, b) => a.price - b.price)

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <section className="mb-16 mt-12">
        <h1 className="text-4xl font-bold mb-6">Shop</h1>
        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">Prints, books, and merchandise.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {products.map((product) => (
          <Link key={product._id} href={`/shop/${product.slug}`} className="group">
            <div className="aspect-square bg-gray-100 dark:bg-gray-900 mb-6 relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{formatCurrency(product.price)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
