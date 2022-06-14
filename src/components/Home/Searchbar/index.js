import React from 'react'
import './styles.css'

function Searchbar({value,handleSearchKey,clearSearch}) {
  return (
    <div className='search-wrap'>
        <form>
        <input type="text" placeholder='search' value={value} onChange={handleSearchKey}/>
        {value && <span onClick={clearSearch}>X</span>}
        <button>Search</button>
        </form>
       
    </div>
  )
}

export default Searchbar;