import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './styles.css'

function Emptylist() {
  return (
    <div className='empty'>
      <h1>No search results</h1><br/>
        <AiOutlineSearch style={{fontSize:'100px'}}/>
    </div>
  )
}

export default Emptylist