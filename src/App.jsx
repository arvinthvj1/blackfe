import { Home } from "./Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterPage from "./Pages/Auth/Register";
import LoginPage from "./Pages/Auth/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" >
          <RegisterPage />
        </Route>
        <Route path="/login" >
          <LoginPage />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
