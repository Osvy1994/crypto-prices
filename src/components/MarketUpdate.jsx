import "./MarketUpdate.css";
import { CoinInfo } from "./CoinInfo";
import { useRef } from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

export function MarketUpdate() {
  const marketRef = useRef(null);
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

  const handleOrderChange = (newOrderBy) => {
    setOrderDirection((prevDirection) =>
      prevDirection === "desc" ? "asc" : "desc"
    );
    setOrderBy(newOrderBy);
    setCurrentPage(0);
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
                Price{" "}
                {orderDirection === "desc" ? (
                  <CaretDownFill />
                ) : (
                  <CaretUpFill />
                )}
              </th>
              <th
                className="table-head-buttons"
                onClick={() => handleOrderChange("change")}
              >
                24h Change{" "}
                {orderDirection === "desc" ? (
                  <CaretDownFill />
                ) : (
                  <CaretUpFill />
                )}
              </th>
              <th
                className="table-head-buttons"
                onClick={() => handleOrderChange("marketCap")}
              >
                Market Cap{" "}
                {orderDirection === "desc" ? (
                  <CaretDownFill />
                ) : (
                  <CaretUpFill />
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
