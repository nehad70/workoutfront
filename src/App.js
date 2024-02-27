
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Sections from './pages/Sections';

import Trainers from './components/Trainers';
import Auth from './components/Auth';
import Program from './pages/Program'
import Addworkout from './pages/Addworkout';
import Play from './pages/Play';
import Details from './pages/Details';
import Profile from './components/Profile';
import Admin from './components/Admin';
import Header2 from './components/Header2';
import About from './components/About';
import Addedplay from './components/Addedplay';
import Rating from './components/Rating';

function App() {
  return (
    
    <div >
      
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/Login' element={<Auth/>}/>

        <Route path='/Register' element={<Auth Register/>}/>

        <Route path='/Section' element={<Sections/>}/>

        
        
        <Route path='/program' element={<Program/>}/>

        <Route path='/addworkout' element={<Addworkout/>}/>

        <Route path='/play/:cat' element={<Play/>}/>

        <Route path='/details/:id' element={<Details/>}/>
        
        <Route path='/profile' element={<Profile/>}/>

        <Route path='/admin' element={<Admin/>}/>

        <Route path='/header2' element={<Header2/>}/>
        
        <Route path='/about' element={<About/>}/>

        <Route path='/addedplay/:cat' element={<Addedplay/>}/>
        
        <Route path='/trainer' element={<Trainers/>}/>
        <Route path='/rating' element={<Rating/>}/>



        



      
      
      </Routes>
      
      
    </div>
  );
}

export default App;
