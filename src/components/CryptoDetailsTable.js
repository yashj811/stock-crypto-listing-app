import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CryptoItem from "./CryptoItem";

const CryptoDetailsTable = () => {
  const [Crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, incPage] = useState(1);
  const [Search, setSearch] = useState("");
  useEffect(() => {
    getCryptoInfo();
  }, []);

  const getCryptoInfo = () => {
    setLoading(true);
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=36a592e36aff54d2272958ce21e6d6a83604b6d5&per-page=5&page=${page}`
      )
      .then((res) => setCrypto(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = (e) => {
    console.log(e.target.value);
  };

  const onclickHandler1 = () => {
    if (page > 1) {
      incPage(--page);
    }
    getCryptoInfo();
  };
  const onclickHandler2 = () => {
    incPage(++page);
    getCryptoInfo();
  };

  const filteredCoins = Crypto.filter((coin) => {
    return coin.name.toLowerCase().includes(Search.toLowerCase());
  });

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              border: "1px solid #dee2e6",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
              <span>Crypto Details Table</span>
            </div>
            <form>
              <input
                style={{ backgroundColor: "#D9D5EC" }}
                className="form-control me-2"
                type="text"
                placeholder="Search By Crypto Name"
                onChange={onChangeHandler}
              ></input>
            </form>
            <div></div>
          </div>
          <table className="table">
            <tbody style={{ color: "#6E6893" }}>
              <tr style={{ backgroundColor: "#D9D5EC", color: "#6E6893" }}>
                <td>Stock/Crypto Name</td>
                <td>Symbol</td>
                <td>Market Cap</td>
                <td> </td>
                <td>Price</td>
              </tr>
              {filteredCoins.map((el) => {
                return (
                  <CryptoItem
                    key={el.id}
                    val={el.id}
                    el={el}
                    onClickHandler={onClickHandler}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          style={{
            backgroundColor: "#D9D5EC",
            textAlign: "right",
            marginBottom: "100px",
            color: "#6E6893",
          }}
        >
          <span> {page}-5 of 5 </span>
          <button
            type="button"
            className="btn btn-sm"
            disabled={page < 2}
            onClick={onclickHandler1}
          >
            prev{" "}
          </button>
          <button
            type="button"
            className="btn btn-sm"
            onClick={onclickHandler2}
          >
            next{" "}
          </button>
        </div>
      </Fragment>
    );
  }
};

export default CryptoDetailsTable;
