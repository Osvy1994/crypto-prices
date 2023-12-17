/* eslint-disable react/prop-types */
export function CoinInfo({ cryptoData }) {
  const { name, iconUrl, price, change, marketCap } = cryptoData;

  const toDecimal = (num) => {
    let newNum = parseFloat(num);
    return num >= 0.09? newNum.toFixed(2) : newNum.toFixed(10);
  };

  return (
    <>
      <td className="coin-image-container">
        <img src={iconUrl} alt={`${name} icon`} />
        {name}
      </td>
      <td>$ {toDecimal(price)}</td>
      <td className={change >= 0 ? "green-text" : "red-text"}>{change} %</td>
      <td>$ {parseFloat(marketCap).toLocaleString()}</td>
    </>
  );
}
