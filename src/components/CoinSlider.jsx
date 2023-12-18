/* eslint-disable react/prop-types */
import "./CoinSlider.css";

export function CoinSlider({ coinData }) {
  const { name, iconUrl, price, change, coinrankingUrl } = coinData;

  const toDecimal = (num) => {
    let newNum = parseFloat(num);
    return num >= 0.01 ? newNum.toFixed(2) : newNum.toFixed(6);
  };

  return (
    <div className="hero-crypto-icons">
      <img src={iconUrl} alt={`${name} icon`} />
      <a href={coinrankingUrl} target="_blank" rel="noreferrer">
        <h3>{name}</h3>
      </a>
      <h5 className={change >= 0 ? "green-text" : "red-text"}>
        {toDecimal(change)}%
      </h5>
      <p>$ {toDecimal(price)}</p>
    </div>
  );
}
