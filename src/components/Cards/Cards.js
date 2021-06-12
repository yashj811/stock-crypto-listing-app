import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <CardItem name={'GOOGLE'} price={'1515'} />
      </div>
      <div>
        <CardItem name={'FACEBOOK'} price={'216'}  />
      </div>
      <div>
        <CardItem name={'AMAZON'} price={'3116'} />
      </div>
    </div>
  );
};

export default Cards;
