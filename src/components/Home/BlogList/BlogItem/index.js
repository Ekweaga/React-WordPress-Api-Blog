import React from 'react'
import { Link } from 'react-router-dom'
import Label from '../../../common/Email/Chip'
import './styles.css'
import {IoIosArrowForward} from 'react-icons/io'


export default function BlogItem({blog}) {
    const {id,cover,avatar,title,description, createdAt,authorname,category} = blog
  return (
    <div className='blogItem-wrap' data-aos="zoom-in">
        <img src={cover} className='blogItem-cover'/>
        <Label label={category}/>
      <h3>{title}</h3><br/>
    <p className='blogItem-desc'>{description}</p>
      
       <footer>
         <div className='blogItem-author'>
           <img src={avatar} className='blogItem-avatar'/>
           <div>
             <h4>{authorname}</h4>
          <p>{createdAt}</p>
           </div>
        
         </div>
         <Link to={`/blog/${id}`} style={{textDecoration:'none'}} className='blogItem-link'><IoIosArrowForward/></Link>
       </footer>
    </div>
  )
}
