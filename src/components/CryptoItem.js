import SaveData from "./SaveData/SaveData";
const CryptoItem = ({ el, onClickHandler, val, Saved, onClickView }) => {
  let pow = Math.pow,
    floor = Math.floor,
    abs = Math.abs,
    log = Math.log;
  let abbrev = "kmb";

  function round(n, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(n * prec) / prec;
  }

  function format(n) {
    var base = floor(log(abs(n)) / log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n / pow(1000, base), 2) + suffix : "" + n;
  }

  return (
    <tr>
      <td>{el.name}</td>
      <td>
        <span
          className="badge rounded-pill"
          style={{ backgroundColor: "#D9D5EC", color: "#4A4AFF" }}
        >
          {el.symbol}
        </span>
      </td>
      <td>${format(Number(el.market_cap))}</td>
      <td>
        <SaveData
          onClickView={onClickView}
          Saved={Saved}
          val={val}
          onClickHandler={onClickHandler}
        />
      </td>
      <td>
        ${Number(el.price).toFixed(3)}
        <div>USD</div>
      </td>
    </tr>
  );
};

export default CryptoItem;
