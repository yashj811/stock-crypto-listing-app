import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import CryptoItem from "./CryptoItem";
import ViewSaved from "../components/SaveData/ViewSaved";

const CryptoDetailsTable = () => {
  const [Crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Saving, setSaving] = useState(false);
  const [Deleting, setDeleting] = useState(false);
  const [View, setView] = useState(false);
  let [page, incPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [Saved, setSaved] = useState([]);
  useEffect(() => {
    getCryptoInfo();
    getSavedInfo();
  }, [Saving, Deleting]);

  const getSavedInfo = async () => {
    setLoading(true);
    const servRes = await axios.get("http://localhost:5000/api/crypto");
    if (servRes.data) {
      setSaved(servRes.data);
    }

    setLoading(false);
  };

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

  const onClickView = () => {
    setView(true);
  };

  const GoBack = () => {
    setView(false);
  };



  const onClickDelete = async (e) => {
    setDeleting(true);

    try {
      const servRes = await axios.put("http://localhost:5000/api/crypto", {
        name: e.target.value,
      });
      if (servRes.data) {
        console.log(servRes.data);
      }
    } catch (err) {
      console.log(err);
    }

    setDeleting(false);
  };

  const onClickHandler = async (e) => {
    setSaving(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      const res = await axios.get(
        `https://api.nomics.com/v1/currencies/ticker?key=36a592e36aff54d2272958ce21e6d6a83604b6d5&ids=${e.target.value}`
      );
      const data = await res.data;
      const body = {
        name: data[0].name,
        symbol: data[0].symbol,
        price: data[0].price,
        market_cap: data[0].market_cap,
      };

      const servRes = await axios.post(
        "http://localhost:5000/api/crypto",
        body
      );

      console.log(servRes.data);
      setSaving(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onclickPrev = () => {
    if (page > 1) {
      incPage(--page);
    }
    getCryptoInfo();
  };
  const onclickNext = () => {
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
        {View ? (
          <ViewSaved Saved={Saved} onClickDelete={onClickDelete} />
        ) : (
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
                      onClickView={onClickView}
                      Saved={Saved.find(({ name }) => name === el.name)}
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
        )}
        <div
          style={{
            backgroundColor: "#D9D5EC",
            textAlign: "right",
            marginBottom: "100px",
            color: "#6E6893",
          }}
        >
          {!View ? (
            <>
              <span> {page}-5 of 5 </span>
              <button
                type="button"
                className="btn btn-sm"
                disabled={page < 2}
                onClick={onclickPrev}
              >
                prev{" "}
              </button>
              <button
                type="button"
                className="btn btn-sm"
                onClick={onclickNext}
              >
                next{" "}
              </button>{" "}
            </>
          ) : (
            <button type="button" className="btn btn-sm" onClick={GoBack}>
             Back
            </button>
          )}
        </div>
      </Fragment>
    );
  }
};

export default CryptoDetailsTable;
