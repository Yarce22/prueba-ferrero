import { useState } from "react"
import type { Product } from "../../types/product"

import { IoMdAdd, IoMdRemove } from "react-icons/io";

const ProductCard = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState<number>(0)

    return (
      <div>
        <div key={product.id}>
          <div className="rounded-xl overflow-hidden mb-4">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-tertiary">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-primary">${product.price}</p>
            <div className="flex items-center gap-2">
              <button
                className="bg-secondary w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center"
                onClick={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}
              >
                <IoMdRemove />
              </button>
              <span>{quantity}</span>
              <button
                className="bg-secondary w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <IoMdAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export { ProductCard }
