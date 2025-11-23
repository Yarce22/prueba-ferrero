import { useState, useEffect, useRef } from "react";
import { Search } from "../Search";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useFiltersStore } from "../../store/filters";
import { useProductsStore } from "../../store/products";

const Filter = () => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const filterRef = useRef<HTMLDivElement>(null)

    const { selectedTypes, selectedOrigins, selectedRoasts, toggleType, toggleOrigin, toggleRoast, clearFilters } = useFiltersStore()
    const { products } = useProductsStore()

    const uniqueOrigins = Array.from(new Set(products.map(p => p.origin)))

    const coffeeTypes: Array<'bourbon' | 'caturra' | 'colombia' | 'castillo' | 'tipica' | 'gesha'> =
        ['bourbon', 'caturra', 'colombia', 'castillo', 'tipica', 'gesha']
    const roastLevels: Array<'Claro' | 'Medio' | 'Oscuro'> = ['Claro', 'Medio', 'Oscuro']

    const handleFilter = () => {
      setShowFilter(!showFilter)
    }

    const handleClearFilters = () => {
      clearFilters()
    }

    const activeFilterCount = selectedTypes.length + selectedOrigins.length + selectedRoasts.length

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
          setShowFilter(false)
        }
      }

      if (showFilter) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [showFilter])

    return (
        <div className="flex items-center justify-between p-6 mt-20">
          <div>
            <Search />
          </div>

          <div className="relative" ref={filterRef}>
            <button
              className="flex gap-2 items-center cursor-pointer bg-secondary px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              onClick={handleFilter}
            >
              <FaFilter />
              <span>Filtrar</span>
              {activeFilterCount > 0 && (
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {showFilter && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl p-6 z-50 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Filtros</h3>
                  <div className="flex gap-2">
                    {activeFilterCount > 0 && (
                      <button
                        onClick={handleClearFilters}
                        className="text-sm text-secondary hover:underline"
                      >
                        Limpiar
                      </button>
                    )}
                    <button onClick={handleFilter}>
                      <IoMdClose size={20} className="cursor-pointer" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-700">Tipo de Café</h4>
                    <div className="space-y-2">
                      {coffeeTypes.map(type => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                            className="w-4 h-4 accent-secondary cursor-pointer"
                          />
                          <span className="text-sm capitalize">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-sm text-gray-700">Origen</h4>
                    <div className="space-y-2">
                      {uniqueOrigins.map(origin => (
                        <label key={origin} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedOrigins.includes(origin)}
                            onChange={() => toggleOrigin(origin)}
                            className="w-4 h-4 accent-secondary cursor-pointer"
                          />
                          <span className="text-sm">{origin}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-sm text-gray-700">Nivel de Tostado</h4>
                    <div className="space-y-2">
                      {roastLevels.map(roast => (
                        <label key={roast} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedRoasts.includes(roast)}
                            onChange={() => toggleRoast(roast)}
                            className="w-4 h-4 accent-secondary cursor-pointer"
                          />
                          <span className="text-sm">{roast}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    )
}

export { Filter }
