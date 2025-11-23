import { useState, useEffect, useRef } from "react";
import { useShoppingCartStore } from "../../store/shoppingCart";
import type { ProductList } from "../../types/product";

import { IoMdClose } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface ShoppingMenuProps {
  handleShoppingMenu: () => void;
}

const ShoppingMenu: React.FC<ShoppingMenuProps> = ({ handleShoppingMenu }) => {
  const { shoppingList, setShoppingList } = useShoppingCartStore((state) => state);
  const [showPopup, setShowPopup] = useState(false);
  const shoppingMenuRef = useRef<HTMLDivElement>(null)

  const iva = shoppingList.reduce((total, product) => total + product.price * product.quantity, 0) * 0.19
  const subtotal = shoppingList.reduce((total, product) => total + product.price * product.quantity, 0) - iva
  const total = subtotal + iva

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shoppingMenuRef.current && !shoppingMenuRef.current.contains(event.target as Node)) {
        handleShoppingMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleShoppingMenu])

  const handleRemoveProduct = (id: number) => {
    const newProductList = shoppingList.filter((product: ProductList) => product.id !== id)
    setShoppingList(newProductList)
    window.localStorage.setItem("shoppingList", JSON.stringify(newProductList))
  }

  const handleBuy = () => {
    setShoppingList([])
    window.localStorage.setItem("shoppingList", JSON.stringify([]))
    setShowPopup(true)

    setTimeout(() => {
      setShowPopup(false)
      handleShoppingMenu()
    }, 3000)
  }

  return (
    <>
      <div
        ref={shoppingMenuRef}
        className="absolute top-0 right-0 z-50 w-[90%] h-screen p-6 bg-white rounded-l-3xl shadow-[-17px_11px_30px_-23px_rgba(0,0,0,0.5)] md:w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <IoMdClose onClick={handleShoppingMenu} size={24} className="cursor-pointer justify-self-end" />
        </div>

        <div className="mt-6 h-full">
          {shoppingList.length > 0 ? (
            <div className="flex flex-col gap-2 h-[90%] items-between justify-between">
              <ul className="flex flex-col gap-2">
                {shoppingList.map((product: ProductList) => (
                  <li key={product.id} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span>x{product.quantity}</span>
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <p>{product.name}</p>
                      <p>${product.price * product.quantity}</p>
                    </div>
                    <button className="cursor-pointer" onClick={() => handleRemoveProduct(product.id)}>
                      <CiTrash size={24} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="justify-self-end">
                <p>Subtotal: ${(subtotal).toFixed(2)}</p>
                <p>IVA: ${iva.toFixed(2)}</p>
                <p>Total: ${total.toFixed(2)}</p>
                <button className="mt-2 px-2 py-1 bg-secondary rounded-lg cursor-pointer flex items-center justify-center" onClick={handleBuy}>Comprar</button>
              </div>
            </div>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 animate-slideUp">
            <div className="flex flex-col items-center text-center gap-4">
              <IoMdCheckmarkCircle size={64} className="text-green-500 animate-bounce" />
              <h2 className="text-2xl font-bold text-gray-800">¡Gracias por tu compra!</h2>
              <p className="text-gray-600">Pronto llegará tu pedido!</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { ShoppingMenu }
