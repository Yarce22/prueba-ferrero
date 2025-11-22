import { useShoppingCartStore } from "../../store/shoppingCart";
import type { Product } from "../../types/product";

import { IoMdClose } from "react-icons/io";

interface ShoppingMenuProps {
  handleShoppingMenu: () => void;
}

const ShoppingMenu: React.FC<ShoppingMenuProps> = ({ handleShoppingMenu }) => {
  const shoppingList = useShoppingCartStore((state) => state.shoppingList);
  return (
    <div className="absolute top-0 right-0 z-50 w-64 h-screen p-6 bg-white rounded-l-3xl shadow-[-17px_11px_30px_-23px_rgba(0,0,0,0.5)]">
      <div>
        <IoMdClose onClick={handleShoppingMenu} size={24} className="cursor-pointer justify-self-end" />
      </div>
      {shoppingList.length > 0 ? (
        <ul>
          {shoppingList.map((product: Product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  )
}

export { ShoppingMenu }
