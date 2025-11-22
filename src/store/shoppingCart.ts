import { create } from "zustand";
import type { Product } from "../types/product";

interface ShoppingCartStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    shoppingList: Product[];
    setShoppingList: (shoppingList: Product[]) => void;
}

export const useShoppingCartStore = create<ShoppingCartStore>()((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    shoppingList: [],
    setShoppingList: (shoppingList: Product[]) => set({ shoppingList }),
}))
