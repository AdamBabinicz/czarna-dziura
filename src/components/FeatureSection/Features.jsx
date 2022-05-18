import React from "react";
import "./Features.css";
import { Container, Row, Col } from "reactstrap";

const FeatureData = [
  {
    title: "Dylatacja czasu",
    desc: "– zjawisko różnic w pomiarze czasu dokonywanym równolegle w dwóch różnych układach odniesienia, z których jeden przemieszcza się względem drugiego. Pomiar dotyczy czasu trwania tego samego zjawiska. Zjawisko było przewidziane w szczególnej teorii względności Alberta Einsteina i następnie potwierdzone doświadczalnie.",
    icon: "ri-map-pin-time-line",
  },
  {
    title: "Grawitacyjna dylatacja czasu",
    desc: "ogólna teoria względności opisuje natomiast zjawisko grawitacyjnej dylatacji czasu w pobliżu dużej masy. Tempo upływu czasu w układzie inercjalnym jest stałe, zaś spowolnienie czasu na powierzchni planet o małych masach, rotujących ze stałą prędkością niemierzalne. Przy wielkich, skoncentrowanych masach i prędkościach zbliżonych do prędkości światła w próżni, dylatacja czasu jest natomiast duża.",
    icon: "ri-discuss-line",
  },
  {
    title: "Znaczenie w technologii",
    desc: "Zjawiska związane z dylatacją czasu stają się istotne w przypadku niektórych technologii, np. elektroniki, nanotechnologii lub techniki satelitarnej. Zmiany związane z dylatacją czasu musiały zostać uwzględnione między innymi w systemach nawigacji satelitarnej, np. w amerykańskim systemie GPS.",
    icon: "ri-gps-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
