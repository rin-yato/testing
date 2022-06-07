import React from 'react'
import './css/SearchBox.css'


function SearchBox({onSearch}) {
    return (
        <div className='searchbox'>
            <input 
                placeholder='search'
                type='search'
                onChange={onSearch}
            />
        </div>
    )
}




export default SearchBox;