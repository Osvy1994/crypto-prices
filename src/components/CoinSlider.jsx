/* eslint-disable react/prop-types */
import "./CoinSlider.css";

export function CoinSlider({ coinData }) {
  const { name, iconUrl, price, change } = coinData;

  const toDecimal = (num) => {
    let newNum = parseFloat(num);
    return newNum.toFixed(2);
  };

  return (
    <div className="hero-crypto-icons">
      <img src={iconUrl} alt={`${name} icon`} />
      <h3>{name}</h3>
      <h5 className={change >= 0 ? "green-text" : "red-text"}>
        {toDecimal(change)}%
      </h5>
      <p>$ {toDecimal(price)}</p>
    </div>
  );
}
