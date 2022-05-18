import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/1.png";
import courseImg2 from "../../assets/images/9.jpg";
import courseImg3 from "../../assets/images/10.jpg";
import courseImg4 from "../../assets/images/3.webp";
import "./Courses.css";
import CourseCard from "./CourseCard";
import Popup from "../Popup";
// import Modal from "../Portal/Modal";

const coursesData = [
  {
    id: "01",
    title: "Czarne dziury o masie gwiazdowej, od 1,5 do 14 mas Słońca",
    lesson: "Cygnus X-1",
    students: "7 200 lat świetlnych",
    rating: "Masa",
    text: "14,8 mas Słońca",
    imgUrl: courseImg1,
    link: "//pl.wikipedia.org/wiki/Gwiazdowa_czarna_dziura",
  },

  {
    id: "02",
    title:
      "Pośrednie czarne dziury o masach między 14 masami Słońca a milionami",
    lesson: "47 Tucanae",
    students: "14 700 lat świetlnych",
    rating: "Masa",
    text: "1400 do 3700 mas Słońca",
    imgUrl: courseImg2,
    link: "//astrofan.pl/czarna-dziura-wagi-sredniej-w-47-tucanae",
  },

  {
    id: "03",
    title: "Supermasywne czarne dziury o milionach lub miliardach mas Słońca",
    lesson: "Holm 15A",
    students: "miliard lat świetlnych",
    rating: "Masa",
    text: "40 miliardów Słońc",
    imgUrl: courseImg3,
    link: "//www.rp.pl/kosmos/art999751-odkryto-gigantyczna-czarna-dziure-ma-mase-40-miliardow-slonc",
  },
  {
    id: "04",
    title: "Hipermasywne czarne dziury o co najmniej 10 miliardach mas Słońca",
    lesson: "TON618",
    students: "700 milionów lat świetlnych",
    rating: "Masa",
    text: "66 miliardów mas Słońca",
    imgUrl: courseImg4,
    link: "//scroll.morele.net/poradniki/duzy-wiekszy-ogromy-ton-618-najwieksza-czarna-dziura-odkryta-do-tej-pory",
  },
];

const Courses = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [modal, setModal] = useState(false);
  // const Toggle = () => setModal(!modal);

  return (
    <section id="rodzaje">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left">
                <h2>Rodzaje czarnych dziur</h2>
                <p>
                  Czarne dziury są interesujące z punktu widzenia fizyków,
                  ponieważ można je wyczerpująco scharakteryzować jedynie trzema
                  wartościami: ich masą, obrotem i ładunkiem.
                </p>
                <p>
                  Nieco inne teorie są używane do opisania zachowania czarnych
                  dziur, które obracają się w porównaniu z nieobrotowymi,
                  naładowane w stosunku do neutralnych.
                </p>
                <p>
                  Największą różnicą między czarnymi dziurami nie jest ich obrót
                  lub ładunek, ale ich masa.
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn" onClick={() => setButtonPopup(true)}>
                  Więcej
                </button>
              </div>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>
                  Czarne dziury mogą mieć różne rozmiary, ale istnieją trzy
                  główne typy czarnych dziur, które określane są w zależności od
                  ich masy i rozmiaru. Najmniejsze są pierwotne czarne dziury.
                  Naukowcy uważają, że ten rodzaj czarnej dziury może mieć
                  wielkość atomu przy masie całej góry.
                </h3>
                <br />
                {/* <img src={web} /> <br /> */}
                {/* <p></p> <br /> */}
                <em>www.komputerswiat.pl</em>
              </Popup>
              {/* <Modal show={modal} close={Toggle} title="Twórczość">
                <p>
                  Inne utwory: „Dwaj Towiańczycy”, w którym opisuje śmierć
                  Michała Szweycera i Adolfa Rozwadowskiego, „Moje strony”,
                  „Rosła kalina”, „Tęsknota”, „Wiersz do poezji”, „Duch
                  sieroty”, „Jan Kochanowski”, „Lirnik. Baśń”, „Łzy”, „Czajka”,
                  „Pustota”, „O powrocie do kraju”, „Zaproszenie”, „Staruszek”;
                  poemat liryczno-epicki „Bitwa racławicka”, ukończony w r.
                  1858.
                </p>
                <br />
                <p>
                  <em>pl.wikipedia.org/wiki/Teofil_Lenartowicz</em>
                </p>
              </Modal> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
