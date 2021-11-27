import React, {useState,useEffect} from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  } from 'react-router-dom';
import LoginSide from '../public/components/LoginSide';
import MainMenu from '../public/components/MainMenu';




const App = () =>{
    return <HashRouter>
 <>
 <Route exact path="/" component={LoginSide} />
 <Route path='/mainMenu' component={MainMenu} />
  </>


    </HashRouter>
      
}


export default App;
