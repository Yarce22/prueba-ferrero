import { create } from "zustand";
import type { Product } from "../types/product";

type CoffeeType = 'bourbon' | 'caturra' | 'colombia' | 'castillo' | 'tipica' | 'gesha';
type RoastLevel = 'Claro' | 'Medio' | 'Oscuro';

interface FiltersStore {
    selectedTypes: CoffeeType[];
    selectedOrigins: string[];
    selectedRoasts: RoastLevel[];
    searchQuery: string;
    toggleType: (type: CoffeeType) => void;
    toggleOrigin: (origin: string) => void;
    toggleRoast: (roast: RoastLevel) => void;
    setSearchQuery: (query: string) => void;
    clearFilters: () => void;
    filterProducts: (products: Product[]) => Product[];
}

export const useFiltersStore = create<FiltersStore>()((set, get) => ({
    selectedTypes: [],
    selectedOrigins: [],
    selectedRoasts: [],
    searchQuery: '',

    toggleType: (type: CoffeeType) => set((state) => ({
        selectedTypes: state.selectedTypes.includes(type)
            ? state.selectedTypes.filter(t => t !== type)
            : [...state.selectedTypes, type]
    })),

    toggleOrigin: (origin: string) => set((state) => ({
        selectedOrigins: state.selectedOrigins.includes(origin)
            ? state.selectedOrigins.filter(o => o !== origin)
            : [...state.selectedOrigins, origin]
    })),

    toggleRoast: (roast: RoastLevel) => set((state) => ({
        selectedRoasts: state.selectedRoasts.includes(roast)
            ? state.selectedRoasts.filter(r => r !== roast)
            : [...state.selectedRoasts, roast]
    })),

    setSearchQuery: (query: string) => set({ searchQuery: query }),

    clearFilters: () => set({
        selectedTypes: [],
        selectedOrigins: [],
        selectedRoasts: [],
        searchQuery: ''
    }),

    filterProducts: (products: Product[]) => {
        const { selectedTypes, selectedOrigins, selectedRoasts, searchQuery } = get();

        if (selectedTypes.length === 0 && selectedOrigins.length === 0 && selectedRoasts.length === 0 && searchQuery === '') {
            return products;
        }

        return products.filter(product => {
            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
            const matchesOrigin = selectedOrigins.length === 0 || selectedOrigins.includes(product.origin);
            const matchesRoast = selectedRoasts.length === 0 || selectedRoasts.includes(product.roast);
            const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesType && matchesOrigin && matchesRoast && matchesSearch;
        });
    }
}))
