import { create } from "zustand";
import type { ProductList } from "../types/product";

interface ShoppingCartStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    shoppingList: ProductList[];
    setShoppingList: (shoppingList: ProductList[] | ((prevList: ProductList[]) => ProductList[])) => void;
}

export const useShoppingCartStore = create<ShoppingCartStore>()((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    shoppingList: [],
    setShoppingList: (shoppingList: ProductList[] | ((prevList: ProductList[]) => ProductList[])) =>
        set((state) => ({
            shoppingList: typeof shoppingList === 'function' ? shoppingList(state.shoppingList) : shoppingList
        })),
}))
