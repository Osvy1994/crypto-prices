export function CoinInfo({ cryptoData }) {
  const {
    name,
    image,
    current_price: price,
    price_change_percentage_24h: priceChange,
    market_cap: marketCap,
  } = cryptoData;

  const toDecimal = (num) => {
    return num.toFixed(2);
  };

  return (
    <>
      <td className="coin-image-container">
        <img src={image} alt={`${name} icon`} />
        {name}
      </td>
      <td>$ {price.toFixed(2)}</td>
      <td className={priceChange >= 0 ? "green-text" : "red-text"}>
        {toDecimal(priceChange)} %
      </td>
      <td>$ {marketCap.toLocaleString()}</td>
    </>
  );
}
