import React from "react"
import './HiddenSearchBar.css'
const HiddenSearchBar = () => {


    return (
        <div className='search'>
            <input type='text' className='input' placeholder='Search...' />
            <button className='btn'>
                <i className='fas fa-search'></i>
            </button>
        </div>
    ) 
}

export default HiddenSearchBar;