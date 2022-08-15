import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home_so/Home';
import Blog from './Components/Blog_Ved/Blog_home';
import Community from './Components/Community_ved/Community'
import Event from './Components/Event_so/Event'
import Profile from './Components/Profile_ved/Profile';
import Nav from './Components/Home_so/Nav';
function App() {
  return(
    <BrowserRouter>
    
   <Nav />
    <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/community' element={<Community/>}/>
<Route path='/event' element={<Event/>}/>
<Route path='/profile' element={<Profile/>}/>
</Routes>

</BrowserRouter>
  )
}

export default App;
