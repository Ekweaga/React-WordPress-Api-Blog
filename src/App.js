import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Email from './components/common/Email';
import {Switch,Router,BrowserRouter,Route} from 'react-router-dom';
import Blog from './pages/Blog'
import iconmoon from './icon-moon.svg';
import iconsun from './icon-sun.svg';
import {useState,useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import Footer from './footer';

function App() {
  const [img,setimg] = useState(false);
  const [bg,setbg] = useState(true)
  const changeimg = ()=>{
    setimg(!img);
    setbg(!bg);
  }
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <><div className={bg ? 'container':'containers'}>
   <BrowserRouter>
   <Switch>
     <Route path='/' exact>
       <Home/>
     </Route>
     <Route path='/blog/:id'>
       <Blog/>
     </Route>
   </Switch>
   </BrowserRouter>
   <div className={bg ? 'changeimg':'changeimgs'}>
   <img src={img ? iconsun:iconmoon} onClick={()=>changeimg()} style={{width:'20px'}}/>

   </div>
   <div className='footer'>
   <Email/>
   </div>
   </div>
   
 
   
   </>
  );
}

export default App;
