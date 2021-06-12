import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CryptoDetailsTable from "./components/CryptoDetailsTable";
import Navbar from "./components/Layout/Navbar";
import Cards from "./components/Cards/Cards";
import ViewSaved from './components/SaveData/ViewSaved';

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
        <Route exact path='/view' component={ViewSaved} />
      </Switch>
    </Router>
  );
};

export default App;
