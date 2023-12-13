import { useState, useEffect } from "react";

export function useCryptoData() {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);

  const SERVER_ERROR_MESSAGE = "Server Error!!!";

  /* const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `; */

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { cryptoData, isLoading, serverError };
}
