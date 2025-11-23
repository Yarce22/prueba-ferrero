import { useEffect, useState } from "react"
import { useShoppingCartStore } from "../../store/shoppingCart";
import type { Product } from "../../types/product"

import { IoMdAdd, IoMdRemove } from "react-icons/io";

const ProductCard = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState<number>(1)
    const {setShoppingList, shoppingList} = useShoppingCartStore()

    useEffect(() => {
      const storedList = window.localStorage.getItem("shoppingList")
      if (storedList) {
        setShoppingList(JSON.parse(storedList))
      }
    }, [setShoppingList])

    const handleAddToCart = () => {
      const addProduct = [...shoppingList, { ...product, quantity }]
      setShoppingList(addProduct)
      window.localStorage.setItem("shoppingList", JSON.stringify(addProduct))
    }

    return (
      <div key={product.id}>
        <div className="rounded-xl overflow-hidden mb-4">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-tertiary">{product.description}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-primary">${product.price}</p>
          <div className="flex items-center gap-2">
            <button
              className="bg-secondary w-6 h-6 rounded-lg cursor-pointer flex items-center justify-center"
              onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
            >
              <IoMdRemove />
            </button>
            <span>{quantity}</span>
            <button
              className="bg-secondary w-6 h-6 rounded-lg cursor-pointer flex items-center justify-center"
              onClick={() => setQuantity(quantity + 1)}
            >
              <IoMdAdd />
            </button>

            <button
              className="px-2 py-1 bg-secondary rounded-lg cursor-pointer flex items-center justify-center"
              onClick={handleAddToCart}
            >
              comprar
            </button>
          </div>
        </div>
      </div>
    )
}

export { ProductCard }

