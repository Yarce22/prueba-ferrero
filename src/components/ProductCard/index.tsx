import { useEffect, useState } from "react"
import { useShoppingCartStore } from "../../store/shoppingCart";
import type { Product, ProductList } from "../../types/product"

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

    const findProductInCart = (productId: number): ProductList | undefined => {
      return shoppingList.find((p: ProductList) => p.id === productId)
    }

    const updateProductQuantity = (productId: number, quantityToAdd: number): ProductList[] => {
      return shoppingList.map((p: ProductList) =>
        p.id === productId
          ? { ...p, quantity: p.quantity + quantityToAdd }
          : p
      )
    }

    const addNewProductToCart = (newProduct: Product, productQuantity: number): ProductList[] => {
      return [...shoppingList, { ...newProduct, quantity: productQuantity }]
    }

    const saveToLocalStorage = (list: ProductList[]) => {
      window.localStorage.setItem("shoppingList", JSON.stringify(list))
    }

    const handleAddToCart = () => {
      const existingProduct = findProductInCart(product.id)

      const updatedList = existingProduct
        ? updateProductQuantity(product.id, quantity)
        : addNewProductToCart(product, quantity)

      setShoppingList(updatedList)
      saveToLocalStorage(updatedList)
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

