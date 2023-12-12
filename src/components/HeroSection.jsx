import { useEffect, useState } from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { CoinSlider } from "./CoinSlider";
import { mockCryptoData } from "../mocks/mock";

export function HeroSection() {
  const [cryptoData, setCryptoData] = useState(null);

  /* useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Cxrp%2Csolana%2Cusdc%2Ccardano%2Cdogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true&precision=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "28509f430emsh2581ea19cf6cc2ap1ac7f0jsndb28dcae8ae4",
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setCryptoData(result);
    }
    fetchData();
  }, []); */

  const coinIds = ["bitcoin", "ethereum", "tether", "solana"];

  return (
    <div className="hero-section">
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
          {coinIds.map((coin) => {
            const coinData = mockCryptoData.find(
              (crypto) => crypto.id === coin
            );

            return (
              <Col key={coin}>
                <CoinSlider coinData={coinData} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
