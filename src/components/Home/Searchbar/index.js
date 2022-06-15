import React from 'react'
import './styles.css'

function Searchbar({value,handleSearchKey,clearSearch,handlesubmit}) {
  return (
    <div className='search-wrap'>
        <form onSubmit={handlesubmit}>
        <input type="text" placeholder='search' value={value} onChange={handleSearchKey}/>
        {value && <span onClick={clearSearch}>X</span>}
        <button>Search</button>
        </form>
       
    </div>
  )
}

export default Searchbar;