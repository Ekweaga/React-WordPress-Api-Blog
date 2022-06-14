import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function BlogItem({blog}) {
    const {id,cover,avatar,title,description, createdAt,authorname} = blog
  return (
    <div className='blogItem-wrap'>
        <img src={cover} className='blogItem-cover'/>
      <h3>{title}</h3><br/>
    <p className='blogItem-desc'>{description}</p>
      
       <footer>
         <div className='blogItem-author'>
           <img src={avatar} className='blogItem-avatar'/>
           <div>
             <h6>{authorname}</h6>
          <p>{createdAt}</p>
           </div>
        
         </div>
         <Link to={`/blog/${id}`} style={{textDecoration:'none'}}>...</Link>
       </footer>
    </div>
  )
}
