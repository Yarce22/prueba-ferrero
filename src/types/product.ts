export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductList extends Product {
    quantity: number;
}
