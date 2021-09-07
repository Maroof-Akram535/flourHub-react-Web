import React from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import Layout from './Components/Layout'
import ApiCallnode from './Components/ApiCallnode';
import PostApiCall from './Components/PostApicall';
import SingUP from './singUpForm';
import FetchUsers from './fetchUsers';
import Login from './Components/loginFom';
import UpdateUser from  './UpdateUsers';
import DeleteUser from './deleteUser';
import {HashRouter,Route} from 'react-router-dom';
 import Header from './Components/Header/Header';
function App() {
  return (
    <React.Fragment>
         <HashRouter>     
       <Route exact path='/'>
      <Header/>
      </Route>
      <Route  path='/login'>
      <Login/>
      </Route>
      <Route path='/fetchUsers'>
       <FetchUsers/>
      </Route>
      </HashRouter>
     
    </React.Fragment>
  );
}

export default App;
