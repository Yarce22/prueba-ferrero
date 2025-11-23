import { ShoppingMenu } from "../../ShoppingMenu";
import { useShoppingCartStore } from "../../../store/shoppingCart";

import { FaShoppingCart } from "react-icons/fa";
import { PiCoffeeBeanDuotone } from "react-icons/pi";

const Header = () => {
    const { isOpen, setIsOpen, shoppingList } = useShoppingCartStore();

    const handleShoppingMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-screen p-6 bg-white border-b border-secondary">
            <h1 className="flex gap-2 items-center text-primary text-2xl font-bold">
              <PiCoffeeBeanDuotone />
              Artesanos
            </h1>

            <div className="relative cursor-pointer" onClick={handleShoppingMenu}>
              <FaShoppingCart size={24} />
              {shoppingList.length > 0 && <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full">{shoppingList.length}</span>}
            </div>

            {isOpen && <ShoppingMenu handleShoppingMenu={handleShoppingMenu} />}
        </header>
    )
}

export { Header }
