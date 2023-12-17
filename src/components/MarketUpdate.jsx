import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { config } from "../../config.js";
import {CaretDownFill, CaretUpFill} from "react-bootstrap-icons"

//add routes
//sort coins

export function MarketUpdate() {
  const marketRef = useRef(null);
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [orderBy, setOrderBy] = useState("marketCap");
  const [orderDirection, setOrderDirection] = useState("desc");

  const SERVER_ERROR_MESSAGE = "Server Error!!!";
  const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=${orderBy}&orderDirection=${orderDirection}&limit=20&offset=${currentPage}`;

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
          setCryptoData(result.data.coins);
          setIsLoading(false);
          console.log(result);
        }
      } catch (err) {
        console.error(`Error fetching crypto data: ${err.message}`);
        setIsLoading(false);
      }
    };
    console.log("useEffect");
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, orderBy, orderDirection]);

  const scrollToMarket = () => {
    marketRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const paginationButtons = [];
  for (let i = 0; i < 10; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage((i *= 20))}
        className={i * 20 === currentPage ? "active-page" : ""}
      >
        {i + 1}
      </button>
    );
  }

  const handleOrderChange = (newOrderBy) => {
    setOrderDirection((prevDirection) =>
      prevDirection === "desc" ? "asc" : "desc"
    );
    setOrderBy(newOrderBy);
    setCurrentPage(0); // Reinicia currentPage cuando cambias el orden
  };

  return (
    <div id="market" className="market-section-main">
      <div className="market-section" ref={marketRef}>
        <h1>Market Update</h1>

        <table className="coin-info-container">
          <thead>
            <tr>
              <th>Coin</th>
              <th
                className="table-head-buttons"
                onClick={() => handleOrderChange("price")}
              >
                Price {orderDirection === 'desc'? <CaretDownFill />: <CaretUpFill />}
              </th>
              <th
                className="table-head-buttons"
                onClick={() => handleOrderChange("change")}
              >
                24h Change {orderDirection === 'desc'? <CaretDownFill />: <CaretUpFill />}
              </th>
              <th
                className="table-head-buttons"
                onClick={() => handleOrderChange("marketCap")}
              >
                Market Cap {orderDirection === 'desc'? <CaretDownFill />: <CaretUpFill />}
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoData &&
              cryptoData.map((coin) => (
                <tr key={coin.uuid}>
                  {CoinInfo && <CoinInfo cryptoData={coin} />}
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
