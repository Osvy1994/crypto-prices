import { useState, useEffect } from "react";
import { config } from "../../config.js";

export const useCryptoData = () => {
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

  return {
    cryptoData,
    isLoading,
    currentPage,
    setCurrentPage,
    orderBy,
    setOrderBy,
    orderDirection,
    setOrderDirection,
  };
};
