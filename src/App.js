import { Fragment } from "react";
import "./App.css";
import CryptoDetailsTable from "./components/CryptoDetailsTable";
import Navbar from "./components/Layout/Navbar";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ marginLeft: "80px", marginRight: "80px" }}>
        <Cards />
        <CryptoDetailsTable />
      </div>
    </Fragment>
  );
};

export default App;
