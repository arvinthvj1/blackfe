import { Home } from "./Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from "react-router-dom";
import RegisterPage from "./Pages/Auth/Register";
import LoginPage from "./Pages/Auth/Login";
import { isUserAvailable } from "./Utilities/authTokens";
import { useEffect, useState } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userAvailable = await isUserAvailable();
        setIsAuthenticated(userAvailable);
      } catch (error) {
        console.error('Error checking user availability:', error);
        setIsAuthenticated(false); 
      }
    };

    fetchData();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

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
        <PrivateRoute path="/dashboard" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
