import { useShoppingCartStore } from "../../store/shoppingCart";
import type { ProductList } from "../../types/product";

import { IoMdClose } from "react-icons/io";
import { CiTrash } from "react-icons/ci";

interface ShoppingMenuProps {
  handleShoppingMenu: () => void;
}

const ShoppingMenu: React.FC<ShoppingMenuProps> = ({ handleShoppingMenu }) => {
  const { shoppingList, setShoppingList } = useShoppingCartStore((state) => state);

  const handleRemoveProduct = (id: number) => {
    setShoppingList((prevList: ProductList[]) => prevList.filter((product: ProductList) => product.id !== id))
  }

  return (
    <div className="absolute top-0 right-0 z-50 w-[90%] h-screen p-6 bg-white rounded-l-3xl shadow-[-17px_11px_30px_-23px_rgba(0,0,0,0.5)] md:w-auto">
      <div>
        <IoMdClose onClick={handleShoppingMenu} size={24} className="cursor-pointer justify-self-end" />
      </div>
      {shoppingList.length > 0 ? (
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
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  )
}

export { ShoppingMenu }
