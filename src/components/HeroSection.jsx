import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { CoinSlider } from "./CoinSlider";
import { useCryptoData } from "../hooks/useCryptoData";
import { useEffect } from "react";

//Add an input to search coin

export function HeroSection() {
  const coinIds = ["bitcoin", "ethereum", "tether", "binancecoin"];
  const { cryptoData, isLoading, serverError } = useCryptoData();

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
              const coinData = cryptoData.find((crypto) => crypto.id === coin);

              return (
                <Col key={coin}>
                  {coinData && <CoinSlider coinData={coinData} />}
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
}
