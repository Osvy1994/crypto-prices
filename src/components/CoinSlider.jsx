/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import "./CoinSlider.css";

export function CoinSlider({ coinData }) {
  const {
    image,
    name,
    price_change_percentage_24h: priceChange,
    current_price: currentPrice,
  } = coinData;

  const toDecimal = (number) => {
    return number.toFixed(2);
  };

  return (
    <Col className="hero-crypto-icons">
      <img src={image} alt={`${name} icon`} />
      <span className="hero-crypto-icons-text">
        <h3>{name}</h3>
        <h3 className={priceChange >= 0 ? "green-text" : "red-text"}>
          {toDecimal(priceChange)}%
        </h3>
      </span>
      <p>$ {toDecimal(currentPrice)}</p>
    </Col>
  );
}
