import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { useCryptoData } from "../hooks/useCryptoData";

//add routes
//sort coins
//server error here is a preview

export function MarketUpdate() {
  const { cryptoData, isLoading } = useCryptoData();

  return (
    <div id="market" className="market-section">
      <h1>Market Update</h1>
      <table className="coin-info-container">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin) => (
            <tr key={coin.id}>
              {CoinInfo && <CoinInfo key={coin.id} cryptoData={coin} />}
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
