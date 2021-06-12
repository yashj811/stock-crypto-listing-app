import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CryptoDetailsTable from "./components/CryptoDetailsTable";
import Navbar from "./components/Layout/Navbar";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Fragment>
              <div style={{ marginLeft: "80px", marginRight: "80px" }}>
                <Cards />
                <CryptoDetailsTable />
              </div>
            </Fragment>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
