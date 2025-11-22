import { ShoppingMenu } from "../../ShoppingMenu";
import { Search } from "../../Search";
import { useShoppingCartStore } from "../../../store/shoppingCart";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const { isOpen, setIsOpen } = useShoppingCartStore();

    const handleShoppingMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className="flex justify-between items-center w-screen p-6 border-b border-secondary">
            <h1 className="text-primary text-2xl font-bold">Artesanos</h1>

            <div>
              <Search />
            </div>

            <div className="relative cursor-pointer" onClick={handleShoppingMenu}>
              <FaShoppingCart size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
            </div>

            <ShoppingMenu isOpen={isOpen} handleShoppingMenu={handleShoppingMenu} />
        </header>
    )
}

export { Header }
