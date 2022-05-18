import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./FreeCourse.css";
import courseImg01 from "../../assets/images/6.webp";
import courseImg02 from "../../assets/images/7.webp";
import courseImg03 from "../../assets/images/13.jpg";
import courseImg04 from "../../assets/images/8.webp";
import FreeCourseCard from "./FreeCourseCard";

const freeCourseData = [
  {
    id: "01",
    title: "Cygnus X-1",
    imgUrl: courseImg01,
    students: "7240 lat świetlnych od nas",
    rating: "21,2 mas Słońca",
    link: "//www.komputerswiat.pl/aktualnosci/nauka-i-technika/nowe-fakty-na-temat-cygnus-x-1-pierwsza-z-odkrytych-czarny-dziur-wieksza-niz-sadzono/6qlw9mp",
  },
  {
    id: "02",
    title: "GW200129",
    imgUrl: courseImg02,
    students: "obiekt kosmiczny rozpędził się do prędkości 5 mln km/h",
    rating: "dwie czarne dziury połączone w jedną",
    link: "//www.komputerswiat.pl/aktualnosci/nauka-i-technika/naukowcy-odkryli-dwie-czarne-dziury-polaczone-w-jedna-obiekt-przyspieszyl-do-ogromnej/zdd6r29",
  },

  {
    id: "03",
    title: "Jednorożec",
    imgUrl: courseImg03,
    students: "1500 lat świetlnych od Ziemi",
    rating: "ma masę około trzy razy większą od Słońca",
    link: "//www.urania.edu.pl/wiadomosci/najmniejsza-w-historii-czarna-dziur-ktora-jest-takze-najblizej-od-ziemi",
  },

  {
    id: "04",
    title: "NGC 1850 BH1",
    imgUrl: courseImg04,
    students: "160 000 lat świetlnych od Ziemi",
    rating: "jest 11 razy większa od masy naszego Słońca",
    link: "//www.national-geographic.pl/artykul/nowa-czarna-dziura-zaobserwowana-poza-droga-mleczna",
  },
];

const FreeCourse = () => {
  return (
    <section id="moc">
      <Container>
        <Row>
          <Col lg="12" className="text-centerX">
            <h2 className="fw-bold">Potęga czarnej dziury</h2>
          </Col>
          {freeCourseData.map((item) => (
            <Col lg="3" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
