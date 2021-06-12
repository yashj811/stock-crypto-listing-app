import { Fragment } from "react";
import {Link} from 'react-router-dom';

const SaveData = ({ Saved, val, onClickHandler, onClickView }) => {
    console.log(Saved);
  return (
    <Fragment>
      {Saved ? (
        <Link to='/'>
        <button
          style={{ backgroundColor: "#18A0FB" }}
          onClick={onClickView}
          value={val}
          name={val}
          type="button"
          className="btn btn-primary"
        >
          View
        </button></Link>
      ) : (
        <button
          style={{ backgroundColor: "#18A0FB" }}
          onClick={onClickHandler}
          value={val}
          name={val}
          type="button"
          className="btn btn-primary"
        >
          Save Data
        </button>
      )}
    </Fragment>
  );
};

export default SaveData;
