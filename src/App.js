import React, { createContext, createState, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import MenuDetails from './Components/MenuDetails/MenuDetails';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';

export const UserContext = createContext();

function App() {

  const [signedInUser, setSignedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <PrivateRoute path="/menu/:id">
              <MenuDetails/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
      
    </div>
  );
}

export default App;
