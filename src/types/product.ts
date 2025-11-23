export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    type: 'bourbon' | 'caturra' | 'colombia' | 'castillo' | 'tipica' | 'gesha';
    origin: string;
    roast: 'Claro' | 'Medio' | 'Oscuro';
}

export interface ProductList extends Product {
    quantity: number;
}
