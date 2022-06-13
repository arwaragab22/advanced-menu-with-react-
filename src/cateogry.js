import React, { useContext } from "react";
import { Menucontext } from "./App";
export default function Categories() {
    const { cat,filter } = useContext(Menucontext);

    return ( 
        <div className="btn-container">
            {Array.from(cat).map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                      onClick={()=>filter(category)}
                       
                    >
                        {category}
                    </button>
                );
            })}
        </div>
       
    )
    
}
