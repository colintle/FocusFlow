"use client";

import {useState} from 'react';

import {AiOutlineSearch} from "react-icons/ai";

interface SearchBar{
    setSearch: (value: string | ((prevVar: string) => string)) => void
}

function SearchBar({setSearch}: SearchBar) {
    const [temp, setTemp] = useState("")

    function handleEnter(e:any){
        if(e.key === 'Enter'){
            setSearch(temp)
        }
    }

    return (
        <div className="flex items-center bg-white w-full px-2 py-3">
            <AiOutlineSearch className="text-gray-500 mr-2" />
            <input
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
                type="text"
                placeholder="Search..."
                className="bg-transparent w-full focus:outline-none"
            />
        </div>
    );
}

export default SearchBar;