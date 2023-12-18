import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { config } from "../../config";
import { CoinSlider } from "./CoinSlider";

//Add an input to search coin

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setcryptoData] = useState([]);

  const SERVER_ERROR_MESSAGE = "Server Error!!!";
  const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=change&orderDirection=desc&limit=4&offset=0`;

  useEffect(() => {
    let isMounted = true;
    async function fetchTopGainers() {
      try {
        const response = await fetch(url, config);
        if (!response.ok) {
          throw new Error(SERVER_ERROR_MESSAGE);
        }
        const result = await response.json();

        if (isMounted) {
          setcryptoData(result.data.coins);
          setIsLoading(false);
          console.log(result);
        }
      } catch (err) {
        console.error(`Error fetching crypto data: ${err.message}`);
        setIsLoading(false);
      }
    }

    console.log("useEffect");
    fetchTopGainers();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div id="home" className="hero-section">
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
        <Row className="top-5">
          <h1>TOP GAINERS</h1>
          {isLoading ? (
            <Col className="loading">
              <p>Loading...</p>
            </Col>
          ) : (
            cryptoData.map((coin) => (
              <Col xs={6} md={3} key={coin.uuid}>
                {cryptoData && <CoinSlider coinData={coin} />}
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}
