import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
        <div className="flex items-center gap-1">
            <IoIosSearch className="fill-tertiary" />
            <input type="text" placeholder="Buscar" className="p-2 placeholder:text-tertiary focus:outline-none focus:border-b-secondary" />
        </div>
    )
}

export { Search }
