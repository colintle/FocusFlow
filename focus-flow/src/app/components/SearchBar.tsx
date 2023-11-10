import {AiOutlineSearch} from "react-icons/ai";

function SearchBar() {
    const placeholder = <AiOutlineSearch/> + " Search..."
    return (
        <div className="flex items-center bg-white w-full px-2 py-3">
            <AiOutlineSearch className="text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent w-full focus:outline-none"
            />
        </div>
    );
}

export default SearchBar;