import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Email from './components/common/Email';
import {Switch,Router,BrowserRouter,Route} from 'react-router-dom';
import Blog from './pages/Blog'

function App() {
  return (
    <><div className="container">
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
  
   </div>
   <Email/>
   </>
  );
}

export default App;
