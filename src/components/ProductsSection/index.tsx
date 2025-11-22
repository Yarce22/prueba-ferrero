import { ProductCard } from "../ProductCard"
import type { Product } from "../../types/product"

const ProductsSection = ({ products }: { products: Product[] }) => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 gap-10">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export { ProductsSection }

