import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { useCryptoData } from "../hooks/useCryptoData";
import { useState } from "react";

//add routes
//sort coins

export function MarketUpdate() {
  const { cryptoData, isLoading, currentPage, setCurrentPage } =
    useCryptoData();

  const scrollMarket = () => {
    window.scrollTo({
      top: window.scrollY - 800,
      behavior: "smooth",
    });
  };

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "active-page" : ""}
      >
        {i}
      </button>
    );
  }

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
      <div className="pagination-buttons" onClick={scrollMarket}>
        {paginationButtons}
      </div>
    </div>
  );
}
