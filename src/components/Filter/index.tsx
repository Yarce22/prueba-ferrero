import { Search } from "../Search";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
    return (
        <div className="flex items-center justify-between p-6">
          <div>
            <Search />
          </div>

          <button className="flex gap-1 items-center cursor-pointer">
            <FaFilter />
            <span>Filtrar</span>
          </button>
        </div>
    )
}

export { Filter }
