import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
  {
    display: "Start",
    url: "#",
  },
  {
    display: "Definicja",
    url: "#definicja",
  },

  {
    display: "Rodzaje",
    url: "#rodzaje",
  },

  {
    display: "Śmierć",
    url: "#śmierć",
  },
  {
    display: "Moc",
    url: "#moc",
  },
  {
    display: "Sagittarius A*",
    url: "#sagittarius",
  },
];

const footerInfoLinks = [
  {
    display: "Tajemnica",
    url: "//www.urania.edu.pl/wiadomosci/tajemnica-jaki-sposob-czarne-dziury-lacza-sie-zderzaja-zaczyna-sie-wyjasniac-3250.html",
  },
  {
    display: "Fuzje",
    url: "//www.chip.pl/2022/04/czarne-dziury-ligo-virgo-fuzje",
  },

  {
    display: "Symulacja",
    url: "//www.youtube.com/watch?v=I_88S8DWbcU&t=4s",
  },

  {
    display: "Tunel",
    url: "//naukawpolsce.pl/aktualnosci/news%2C31809%2Cprzepis-na-tunel-czasoprzestrzenny-wrzuc-ciemna-energie-do-czarnej-dziury",
  },
];

const Footer = () => {
  return (
    <footer id="kontakt">
      <Container className="grid">
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i class="ri-checkbox-blank-circle-fill"></i> Czarne dziury
            </h2>
            <div className="follows">
              <p className="mb-0">Media</p>
              <span>
                <a
                  href="//www.facebook.com/watch/?ref=search&v=419829542909727&external_log_id=2f37c8e8-2194-4a72-8483-418e1fa502a0&q=czarna%20dziura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="//pl.pinterest.com/levy0528/czarne-dziury"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-pinterest-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="//brainboss.pl/kosmos/czarna-dziura-czym-jest-i-jak-powstaje"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-google-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="//twitter.com/cnkopernik/status/1115969180522680320"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="//www.youtube.com/watch?v=SgK0A0ijXvs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="//www.instagram.com/explore/tags/czarnadziura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </Col>
          <div className="grid1">
            <Col lg="3" md="6" className="mb-4">
              <h6 className="fw-bold">Linki</h6>
              <ListGroup className="link__list">
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 ps-0 link__item"
                  >
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <h6 className="fw-bold">Ciekawe</h6>
              <ListGroup className="link__list">
                {footerInfoLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 ps-0 link__item"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3" md="6" className="line">
              <h6 className="fw-bold">Kontakt</h6>
              <p>Adres: Radom</p>
              <p>Email: puaro@vp.pl</p>
              <p>
                <strong>2022 - {new Date().getFullYear()}.</strong>
              </p>
            </Col>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
