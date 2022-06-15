import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Label from '../../components/common/Email/Chip';
import Header from '../../components/Home/Header';
import { Datalist } from '../../images/data';

import './styles.css';

function Blog() {
  const {id} = useParams();
  const [blog,setblog]=useState()
  useEffect(()=>{
    let blog= Datalist.find((data)=>data.id == parseInt(id));
    setblog(blog)
  }
  
  ,[])
  return (
    <><div>
      <Header />
    </div>  <div className=' blog' >
      <div>Published {blog?.createdAt}</div><br/>
        <h3 style={{fontSize:'25px'}}>{blog?.title}</h3> <br/>
        <div className='btns'>
          {blog?.subcategory.map((category)=>{
            return(<div><Label label={category}/></div>)
          })}
        </div><br/>
        <img src={blog?.cover} className='blogItem-cover'/>
        
    <p className='blogItem-desc'>{blog?.description}</p>
      
      
    </div></>
  )
}

export default Blog