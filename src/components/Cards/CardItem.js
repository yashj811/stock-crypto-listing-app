import Draggable from "react-draggable";
import GOOGLE from "../../Assets/GOOGL.png";
import AMAZON from "../../Assets/AMZN.svg";
import FACEBOOK from "../../Assets/FB.png";

const CardItem = ({ name, price }) => {
  const eventControl = (event, info) => {
    console.log("Event name: ", event.type);
    console.log(event, info);
  };

  let imgType;

  name === "GOOGLE"
    ? (imgType = GOOGLE)
    : name === "AMAZON"
    ? (imgType = AMAZON)
    : (imgType = FACEBOOK);
  return (
    <Draggable
      axis="x"
      onDrag={eventControl}
      onStart={eventControl}
      onStop={eventControl}
      onMouseDown={eventControl}
      onMouseUp={eventControl}
      onTouchStart={eventControl}
      onTouchEnd={eventControl}
    >
      <div style={dragWrapper}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>{name}</div>
          <div>
            <img
              style={{ width: "40px", marginLeft: "70px" }}
              src={imgType}
              alt="logoimg"
            />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>{price} USD</div>
      </div>
    </Draggable>
  );
};

const dragWrapper = {
  width: "270px",
  height: "170px",
  cursor: "move",
  padding: "50px",
  textAlign: "center",
  background: "rgb(0,0,0,9%)",
  margin: "40px",
};

export default CardItem;
