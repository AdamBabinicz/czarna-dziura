import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/4.jpg";
import CountUp from "react-countup";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="definicja">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="..." className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Czym jest czarna dziura?</h2>
              <p>
                Obszar czasoprzestrzeni, którego z uwagi na wpływ grawitacji,
                nic – łącznie ze światłem i informacją – nie może opuścić.
                Zgodnie z ogólną teorią względności, do jej powstania niezbędne
                jest nagromadzenie dostatecznie dużej masy w odpowiednio małej
                objętości. Czarną dziurę otacza matematycznie zdefiniowana
                powierzchnia nazywana horyzontem zdarzeń, która wyznacza granicę
                bez powrotu.
              </p>
              <p>
                Nazywa się ją „czarną”, ponieważ pochłania całkowicie światło
                trafiające w horyzont, nie odbijając niczego, zupełnie jak ciało
                doskonale czarne w termodynamice. Kwantowa teoria pola
                przewiduje, że czarne dziury emitują promieniowanie jak ciało
                doskonale czarne o niezerowej temperaturze. Temperatura ta jest
                odwrotnie proporcjonalna do masy czarnej dziury, co sprawia, że
                bardzo trudno je zaobserwować w wypadku czarnych dziur o masie
                gwiazdowej bądź większych.
              </p>
              <p>
                Parametry układu podwójnego GRS 1915+105, najbardziej znanego
                mikrokwazara w naszej Galaktyce:
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={14} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">14 ±4 mas Słońca</p>
                  </div>

                  {/* <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={10} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">temperatura T=10^-7K</p>
                  </div> */}
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={98} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">moment pędu a {">"} 0.98M</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp
                        start={0}
                        end={36}
                        duration={2}
                        suffix="tys. lat świetlnych"
                      />
                    </span>

                    <p className="counter__title">
                      odległość od Słońca (w gwiazdozbiorze Orła)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;

// https://www.urania.edu.pl/wiadomosci/astronomowie-opracowuja-nowa-metode-mierzenia-temperatur-czarnych-dziur
