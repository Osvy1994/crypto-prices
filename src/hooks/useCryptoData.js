import { useState, useEffect } from "react";

export function useCryptoData() {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [currentPage, setCurrentPage] = useState([]);

  const SERVER_ERROR_MESSAGE = "Server Error!!!";
  const url = `https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=${currentPage}&per_page=10&order=market_cap_desc`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "28509f430emsh2581ea19cf6cc2ap1ac7f0jsndb28dcae8ae4",
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
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
    console.log("useEffect");
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { cryptoData, isLoading, serverError };
}
