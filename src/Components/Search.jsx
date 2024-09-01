import React, { useRef } from "react";


function Search(props) {
    const searchInput = useRef();
    return(
        <div className="flex shadow-xl">
            <input type="search" value={props.searchData} onChange={()=> props.eventHandler(searchInput.current.value)} ref={searchInput} className=" rounded-xl border-black w-full p-3 text-2xl" />
            <button onClick={props.searchWeather} className="p-3 bg-slate-500">Search</button>
        </div>
    )
}


export default Search