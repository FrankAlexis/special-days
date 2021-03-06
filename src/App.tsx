import "./App.scss";

import Banner from "./components/banner/Banner";
import React from "react";
import data from "./assets/quotes/data.json";

interface Profile {
  name: string;
  photo: string;
  description: string;
}
const App = () => (
  <div className="">
    <section>
      <Banner></Banner>
    </section>
    <main>
      <section>
        {data.map((profile: Profile, index) => (
          <div key={index}>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export default App;
