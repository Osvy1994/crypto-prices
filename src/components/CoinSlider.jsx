/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import "./CoinSlider.css";

export function CoinSlider({ coinData }) {
  const { name, iconUrl, price, change } = coinData;

  const toDecimal = (num) => {
    let newNum = parseFloat(num);
    return newNum.toFixed(2);
  };

  return (
    <Col className="hero-crypto-icons">
      <img src={iconUrl} alt={`${name} icon`} />
      <span className="hero-crypto-icons-text">
        <h3>{name}</h3>
        <h3 className={change >= 0 ? "green-text" : "red-text"}>
          {toDecimal(change)}%
        </h3>
      </span>
      <p>$ {toDecimal(price)}</p>
    </Col>
  );
}
