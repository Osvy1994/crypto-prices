import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { useRef, useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

export function MarketUpdate() {
  const marketRef = useRef(null);
  const [activeOrder, setActiveOrder] = useState(null);
  const {
    cryptoData,
    isLoading,
    currentPage,
    setCurrentPage,
    setOrderBy,
    orderDirection,
    setOrderDirection,
  } = useCryptoData();

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

  const handleOrderChange = (newOrderBy, index) => {
    setOrderDirection((prevDirection) =>
      prevDirection === "desc" ? "asc" : "desc"
    );
    setOrderBy(newOrderBy);
    setCurrentPage(0);
    setActiveOrder(index);
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
                className={`table-head-buttons ${
                  activeOrder === 0 ? "active" : "hidden"
                }`}
                onClick={() => handleOrderChange("price", 0)}
              >
                Price{" "}
                {orderDirection === "desc" ? (
                  <CaretDownFill width={15} />
                ) : (
                  <CaretUpFill width={15} />
                )}
              </th>
              <th
                className={`table-head-buttons ${
                  activeOrder === 1 ? "active" : "hidden"
                }`}
                onClick={() => handleOrderChange("change", 1)}
              >
                24h Change{" "}
                {orderDirection === "desc" ? (
                  <CaretDownFill width={15} />
                ) : (
                  <CaretUpFill width={15} />
                )}
              </th>
              <th
                className={`table-head-buttons ${
                  activeOrder === 2 ? "active" : "hidden"
                }`}
                onClick={() => handleOrderChange("marketCap", 2)}
              >
                Market Cap{" "}
                {orderDirection === "desc" ? (
                  <CaretDownFill width={15} />
                ) : (
                  <CaretUpFill width={15} />
                )}
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
