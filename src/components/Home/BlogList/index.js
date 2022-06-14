import React from 'react'
import BlogItem from './BlogItem'
import './styles.css';
function BlogList({blogs}) {
  return (
    <div className='bloglist-wrap'>
        {blogs.map((blog)=>{
            return <BlogItem blog={blog}/>
        })}
    </div>
  )
}

export default BlogList