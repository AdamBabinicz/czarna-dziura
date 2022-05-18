import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assets/images/4.webp";
import "./ChooseUs.css";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="śmierć">
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose__content">
              <h2>Śmierć czarnej dziury</h2>
              <p>
                Co się dzieje gdy czarne dziury umierają? Czy wyparowują one
                powoli cały swój materiał aż w końcu znikają? Zdaniem fizyków z
                Uniwersytetu Aix-Marseille scenariusz może być zgoła odmienny -
                jeśli teoria pętlowej grawitacji kwantowej jest prawidłowa
                czarne dziury powinny pod koniec swego życia zmieniać się w
                całkowite przeciwieństwo - białe dziury emitujące gwałtownie
                całą swoją zawartość w przestrzeń kosmiczną.
              </p>
              <p>
                Co ciekawe zmiana taka ma następować tuż po uformowaniu się
                czarnej dziury jednak ze względu na dylatację czasu wywołaną
                przez ogromną grawitację do zewnętrznych obserwatorów zjawisko
                to "dotrze" dopiero po miliardach czy bilionach lat. Jeśli
                teoria ta jest właściwa już niedługo powinniśmy być świadkami
                eksplozji niewielkich czarnych dziur, które uformowały się na
                początku wszechświata.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=IUWcz4tZgeI"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="..." className="w-100" />
              )}
              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
