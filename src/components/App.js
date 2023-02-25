import React from 'react'
import '../styles/App.css';
import  BMSNavbar  from './BMSNavbar';
import Home from './Home';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Test from './Test';
import Register from './Register';
import Login from './Login';
const App = () => {


  return (
    <div id="main">
      <Router>
      <BMSNavbar/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route path ="/test"  element={<Test/>}/>
          <Route path ="/register"  element={<Register/>}/>
          <Route path ="/login"  element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App;
