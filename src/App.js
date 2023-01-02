import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  } from 'react-router-dom';
import LoginSide from '../public/components/LoginSide';
import AdminMainMenu from '../public/components/AdminMainMenu';

const App = () =>{
  return (   
<HashRouter>
 <Route exact path="/" component={LoginSide} />
 <Route path='/mainMenu' component={AdminMainMenu } /> 
   </HashRouter>
  )
      
}


export default App;
