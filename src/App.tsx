import { useEffect } from "react"

import { Header } from "./components/share/Header"
import { Filter } from "./components/Filter"
import { ProductsSection } from "./components/ProductsSection"
import { useProductsStore } from "./store/products"

function App() {
  const { products, setProducts } = useProductsStore()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [setProducts])

  return (
    <>
      <Header />
      <Filter />
      <ProductsSection products={products}/>
    </>
  )
}

export default App
