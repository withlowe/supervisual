import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import RelatedProducts from "@/components/related-products"
import { getProductBySlug, getRelatedProducts } from "@/lib/get-content"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  // Get related products
  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="aspect-square bg-gray-100 dark:bg-gray-900 relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl">{formatCurrency(product.price)}</p>
          </div>

          {product.dimensions && (
            <div>
              <h2 className="text-sm uppercase tracking-wider mb-2">Dimensions</h2>
              <p>{product.dimensions}</p>
            </div>
          )}

          {product.materials && product.materials.length > 0 && (
            <div>
              <h2 className="text-sm uppercase tracking-wider mb-2">Materials</h2>
              <ul className="list-disc pl-5">
                {product.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-6">
            <Button size="lg" className="w-full">
              View Details
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <Mdx code={product.body.code} />

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  )
}
