import { create } from "zustand";
import type { Product } from "../types/product";

interface ProductsStore {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const useProductsStore = create<ProductsStore>()((set) => ({
    products: [],
    setProducts: (products: Product[]) => set({ products }),
}))
