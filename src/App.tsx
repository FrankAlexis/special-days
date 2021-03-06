import "./App.scss";

import React, { Fragment } from "react";

import Banner from "./components/banner/Banner";
import CardList from "./components/card/CardList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import data from "./assets/quotes/data.json";

const App = () => (
  <Fragment>
    <div className="container">
      <div className="main-page">
        <Header />
        <section id="#phasesSection">
          <Banner />
        </section>
        <section>
          Feliz día de la mujer, Feliz día de la mujer, Feliz día de la mujer
        </section>
        <main>
          <section id="#matesSection">
            <CardList data={data} />
          </section>
        </main>
      </div>
      <section>
        <Footer id="#footerSection" />
      </section>
    </div>
  </Fragment>
);

export default App;
