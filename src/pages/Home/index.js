import React from 'react'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header'
import Searchbar from '../../components/Home/Searchbar'
import { Datalist } from '../../images/data'


function Home() {
  return (
    <div>
   <Header/>
   {/*Search bar*/}
   <Searchbar/>
    {/*Blog list / emptylist*/}
    <BlogList blogs={Datalist}/>
    </div>
  )
}

export default Home