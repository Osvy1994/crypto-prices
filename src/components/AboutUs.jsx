import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import { Wallet } from "react-bootstrap-icons";

export function AboutUs() {
  return (
    <Container className="about-section">
      <Row>
        <Col className="about-title-container">
          <h1>
            WHY <span>CHOOSE US</span>
          </h1>
        </Col>
      </Row>
      <Row className="cards-main">
        <Col className="cards-container">
          <div className="about-card-container">
            <div className="about-card-icon">
              <Wallet size={25} />
            </div>
            <span className="about-card-text">
              <h4>CONNECT YOUR WALLET</h4>
              <h6>Use Trust Wallet, Metamask or to connect to the app.</h6>
            </span>
          </div>
          <div className="about-card-container">
            <div className="about-card-icon">
              <Wallet size={25} />
            </div>
            <span className="about-card-text">
              <h4>SELECT YOUR QUANTITY</h4>
              <h6>
                Upload your crypto and set a title, description and price.
              </h6>
            </span>
          </div>
          <div className="about-card-container">
            <div className="about-card-icon">
              <Wallet size={25} />
            </div>
            <span className="about-card-text">
              <h4>CONFIRM TRANSACTION</h4>
              <h6>Earn by selling your crypto on our marketplace.</h6>
            </span>
          </div>
        </Col>
        <Col className="about-image-container cards-container">
          <img
            src="https://coindom-crypto-search.vercel.app/static/media/choose-main.39852b7511b28d44406f.png"
            alt=""
          />
        </Col>
        <Col className="cards-container">
          <div className="about-card-container">
            <div className="about-card-icon">
              <Wallet size={25} />
            </div>
            <span className="about-card-text">
              <h4>RECEIVE YOUR OWN NFTS</h4>
              <h6>Invest all your crypto at one place on one platform.</h6>
            </span>
          </div>
          <div className="about-card-container">
            <div className="about-card-icon">
              <Wallet size={25} />
            </div>
            <span className="about-card-text">
              <h4>TAKE A MARKET TO SELL</h4>
              <h6>
                Discover, collect the right crypto collections to buy or sell.
              </h6>
            </span>
          </div>
          <div className="about-card-container">
            <div className="about-card-icon">
              <Wallet size={25} />
            </div>
            <span className="about-card-text">
              <h4>DRIVE YOUR COLLECTION</h4>
              <h6>We make it easy to Discover, Invest and manage.</h6>
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="about-title-container about-join-container">
          <h1>
            <span className="floating-icon-btc">
              <img
                src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png"
                alt="Bitcoin Floating Icon"
                width={70}
              />
            </span>
            JOIN US VIA
            <span className="floating-icon-eth">
              <img
                src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png"
                alt="Ethereum Floating Icon"
                width={70}
              />
            </span>
            <span> DISCORD</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="about-join-text">
          Invest and manage all your crypto at one place.
        </Col>
      </Row>
      <Row>
        <div className="join-button">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://discord.com/"
          >
            Join via Discord
          </a>
        </div>
      </Row>
    </Container>
  );
}
