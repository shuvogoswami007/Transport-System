import { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PickUp from './components/PickUp/PickUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Signup from './components/Signup/Signup';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/transport/:id">
            <PickUp />
          </PrivateRoute>
          <Route path="/pickup">
            <PickUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
