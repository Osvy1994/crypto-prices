import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { CoinSlider } from "./CoinSlider";
import { useState, useEffect } from "react";
import { config } from "../../config.js";
//Add an input to search coin

export function HeroSection() {
  const coinIds = ["bitcoin", "ethereum", "tether", "binancecoin"];
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);

  const SERVER_ERROR_MESSAGE = "Server Error!!!";
  const url = `https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=10&order=market_cap_desc`;

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
  }, []);

  return (
    <div id="home" className="hero-section">
      {
        <Container className="hero-section-container">
          <Row>
            <Col className="hero-title">
              <h1>
                <span className="floating-icon-btc">
                  <img
                    src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png"
                    alt="Bitcoin Floating Icon"
                    width={70}
                  />
                </span>
                TRACK AND TRADE
                <span className="floating-icon-eth">
                  <img
                    src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png"
                    alt="Ethereum Floating Icon"
                    width={70}
                  />
                </span>
              </h1>
              <h1>CRYPTO CURRENCIES</h1>
            </Col>
          </Row>
          <Row>
            {serverError ? (
              <Col className="server-error">
                <p>Server Error 😒</p>
                <p>It is a Beta Server!!!</p>
              </Col>
            ) : isLoading ? (
              <Col className="loading">
                <p>Loading...</p>
              </Col>
            ) : (
              coinIds.map((coin) => {
                const coinData = cryptoData.find(
                  (crypto) => crypto.id === coin
                );

                return (
                  <Col key={coin}>
                    {coinData && <CoinSlider coinData={coinData} />}
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      }
    </div>
  );
}
