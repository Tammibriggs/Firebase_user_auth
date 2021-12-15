import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/verify-email' component={VerifyEmail} /> 
      </Switch>
  </Router>
  );
}

export default App;
