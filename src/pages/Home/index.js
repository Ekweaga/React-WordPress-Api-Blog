import React from 'react'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header'
import Searchbar from '../../components/Home/Searchbar'
import { Datalist } from '../../images/data'
import {useState} from 'react'
import Emptylist from '../../components/common/Email/Empty/emptylist'


function Home() {
  const [blogs,setblogs]=useState(Datalist);
  const [searchKey, setsearchKey] = useState("");

  const handlesubmit = (e)=>{
      e.preventDefault();
      handleSearchResults();
  }

  const handleSearchResults = ()=>{
    const allblogs = Datalist;
    const filteredblogs = allblogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setblogs(filteredblogs)
  }
  const clearSearch = ()=>{
    setblogs(Datalist)
    setsearchKey("")
  }
  return (
    <div>
   <Header/>
   {/*Search bar*/}
   <Searchbar handlesubmit={handlesubmit} value={searchKey} handleSearchKey={(e)=>setsearchKey(e.target.value)} clearSearch={clearSearch}/>
    {/*Blog list / emptylist*/}
    {!blogs.length ? <Emptylist/> :<BlogList blogs={blogs}/> }
    </div>
  )
}

export default Home