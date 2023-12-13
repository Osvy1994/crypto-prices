import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { cryptoData } from "../mocks/mock";

//add routes
//sort coins

export function MarketUpdate() {
  return (
    <div className="market-section">
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
    </div>
  );
}
