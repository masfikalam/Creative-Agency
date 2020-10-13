import React, {useState, createContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import CustomerPage from './Pages/CustomerPage/CustomerPage';
import PrivateRoute from './Pages/LoginPage/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export const UserContext = createContext();

function App() {
  const defaultUser = {
    signed: false,
    name: '',
    email: '',
    photo: '',
    message: ''
  }
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard/:selectedService">
            <CustomerPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
