import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface RelatedProductsProps {
  products: Product[]
  title?: string
}

export default function RelatedProducts({ products, title = "You May Also Like" }: RelatedProductsProps) {
  if (!products.length) return null

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Link key={product._id} href={`/shop/${product.slug}`} className="group flex gap-4 items-start">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 relative flex-shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div>
              <h3 className="font-medium group-hover:underline">{product.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{formatCurrency(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
