import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { config } from "../../config.js";

//add routes
//sort coins

export function MarketUpdate() {
  const marketRef = useRef(null);
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [currentPage, setCurrentPage] = useState([]);
  const [orderBy, setOrderBy] = useState("market_cap_desc");

  const SERVER_ERROR_MESSAGE = "Server Error!!!";
  const url = `https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=${currentPage}&per_page=10&order=${orderBy}`;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, config);
        if (!response.ok) {
          throw new Error(SERVER_ERROR_MESSAGE);
        }
        const result = await response.json();

        if (isMounted) {
          setCryptoData(result);
          setIsLoading(false);
          console.log(result);
        }
      } catch (err) {
        console.error(`Error fetching crypto data: ${err.message}`);
        setServerError(true);
        setIsLoading(false);
      }
    };
    console.log("useEffect");
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, orderBy]);

  const scrollToMarket = () => {
    marketRef.current.scrollIntoView({ behavior: "smooth" });
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
    <div id="market" className="market-section-main">
      <div className="market-section" ref={marketRef}>
        <h1>Market Update</h1>
        <div className="order-buttons">
          <button onClick={() => setOrderBy("market_cap_desc")}>
            Market Cap
          </button>
          <button onClick={() => setOrderBy("market_cap_asc")}>
            Ordenar por Market Cap Asc
          </button>
          <button onClick={() => setOrderBy("id_desc")}>
            Order by Name Desc
          </button>
          <button onClick={() => setOrderBy("id_asc")}>
            Order by Name Asc
          </button>
        </div>
        <table className="coin-info-container">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th onClick={() => setOrderBy("market_cap_desc")}>Market Cap</th>
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
      <div className="pagination-buttons" onClick={scrollToMarket}>
        {paginationButtons}
      </div>
    </div>
  );
}
