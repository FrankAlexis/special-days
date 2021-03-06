import "./App.scss";

import Banner from "./components/banner/Banner";
import CardList from "./components/card/CardList";
import Header from "./components/header/Header";
import React from "react";
import data from "./assets/quotes/data.json";

const App = () => (
  <div className="container">
    <Header></Header>
    <section>ssdsd{/*<Banner></Banner>*/}</section>
    <section>
      Feliz día de la mujer, Feliz día de la mujer, Feliz día de la mujer
    </section>
    <main>
      <section>
        <CardList data={data}></CardList>
      </section>
    </main>
    <section>
      <footer>I'm a footer</footer>
    </section>
  </div>
);

export default App;
