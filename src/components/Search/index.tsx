import { IoIosSearch } from "react-icons/io";
import { useFiltersStore } from "../../store/filters";

const Search = () => {
    const { searchQuery, setSearchQuery } = useFiltersStore()

    return (
        <div className="flex items-center gap-1">
            <IoIosSearch className="fill-tertiary" />
            <input
                type="text"
                placeholder="Buscar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 placeholder:text-tertiary focus:outline-none focus:border-b-2 focus:border-b-secondary transition-all"
            />
        </div>
    )
}

export { Search }
