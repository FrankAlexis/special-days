import "./App.scss";

import React, { Fragment, useState } from "react";

import Banner from "./components/banner/Banner";
import CardList from "./components/card/CardList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import data from "./assets/quotes/data.json";

const App = () => {
  const [mouseX, setmouseX] = useState(0);
  const [mouseY, setmouseY] = useState(0);
  const [cardHover, setCardHover] = useState(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [textScroll, setTextScroll] = useState(0)

if(cardHover === 'card' || cardHover === 'link') {
  document.body.style.cursor = 'none'
} else {
  document.body.style.cursor = 'initial'
}


const totalWidth = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progressWidth = (window.pageYOffset / totalWidth * 100 - 0.4);
  setScrollWidth(progressWidth)
  setTextScroll(window.pageYOffset / 20)
}

  document.addEventListener('mousemove', e => {
    setmouseX(e.clientX);
    setmouseY(e.clientY);
  })

  return (
    <Fragment>
     <div className={`cursor ${cardHover === 'link' ? 'cursor--link' : ''} ${cardHover === 'card' ? 'cursor--active' : ''}`} style={{top: mouseY, left: mouseX}} />
    <div className="container">
      <div className="main-page">
        <Header hover={setCardHover} isHover={cardHover} mouseY={mouseY} mouseX={mouseX} />
        <section id="#phasesSection">
          <Banner />
        </section>
        <main>
          <div className="scrollbar" style={{width: `${scrollWidth}%`}} />
          <section className="big-text">
          <p className="big-text__happy" style={{transform: `translateX(-${textScroll}%)`}}><span>FELIZ DÍA</span><span>FELIZ DÍA</span><span>FELIZ DÍA</span><span>FELIZ DÍA</span><span>FELIZ DÍA</span><span>FELIZ DÍA</span><span>FELIZ DÍA</span><span>FELIZ DÍA</span></p>
          <p className="big-text__woman" style={{transform: `translate(calc(-80% + ${textScroll}%), -3rem)`}}><span>MUJER</span><span>MUJER</span><span>MUJER</span><span>MUJER</span><span>MUJER</span><span>MUJER</span><span>MUJER</span><span>MUJER</span><span>MUJER</span></p>
        </section>
          <section id="#matesSection">
            <CardList data={data} hover={setCardHover} />
          </section>
        </main>
      </div>
      <section>
        <Footer id="#footerSection" />
      </section>
    </div>
  </Fragment>
  )
};

export default App;
