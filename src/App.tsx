import { useEffect } from "react"

import { Header } from "./components/share/Header"
import { Footer } from "./components/share/Footer"
import { Filter } from "./components/Filter"
import { ProductsSection } from "./components/ProductsSection"
import { useProductsStore } from "./store/products"
import { useFiltersStore } from "./store/filters"

function App() {
  const { products, setProducts } = useProductsStore()
  const { filterProducts } = useFiltersStore()

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

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Filter />
      <ProductsSection products={filteredProducts}/>
      <Footer />
    </>
  )
}

export default App
