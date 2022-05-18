import React from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/2.webp";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <h1 className="mb-4">
                CZARNE DZIURY - portalami <br /> do światów równoległych?
              </h1>
              <p className="mb-4">
                Współczesna astrofizyka nikomu nie zawdzięcza równie wiele co
                Stephenowi Hawkingowi. Genialny naukowiec i kosmolog podczas
                niedawnego wykładu na sztokholmskim Królewskim Instytucie
                Technologicznym wygłosił nową teorię, która jeśli się
                potwierdzi, może oznaczać absolutny przełom w tym, jak
                postrzegamy wszechświat.
                <br /> Do tej pory większość naukowego świata była przekonana,
                że znalezienie się we wnętrzu czarnej dziury oznacza
                natychmiastowe rozczepienie się materii i jej całkowite
                zniszczenie.
                <br />
                Według Hawkinga jest wręcz przeciwnie - z czarnej dziury da się
                wrócić! Ale co ciekawsze, bardzo prawdopodobne jest także to, że
                zamiast do naszego wszechświata, ciało przeniesie się do
                alternatywnej rzeczywistości.
              </p>
              {/* <div className="search">
                <input type="text" placeholder="Search" />
                <button className="btn">Search</button>
              </div> */}
            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={heroImg} alt="..." className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

// https://www.komputerswiat.pl/aktualnosci/wydarzenia/czarne-dziury-to-portale-do-innych-swiatow-tak-przynajmniej-twierdzi-stephen-hawking/rd6kv29
