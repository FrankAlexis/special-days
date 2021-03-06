import "./Banner.scss";

import React from "react";

export default function Banner() {
  return (
    <div className="container">
      <div className="text-slider-wrapper">
        <div className="text-slider">
          <div className="text-slide">
            <h1>
              A blessing for every <br></br> skin.
            </h1>
          </div>
          <div className="text-slide">
            <h1>
              The perfect mix of old <br></br> & new.
            </h1>
          </div>
        </div>
      </div>

      <div className="slider-control">
        <div className="prev">
          <button type="button">{"<-"}</button>
        </div>
        <div className="next">
          <button type="button">{"->"}</button>
        </div>
      </div>

      <div className="blocks">
        <div className="block-1"></div>
        <div className="block-2"></div>
        <div className="block-3"></div>
      </div>

      <div className="overlay"></div>

      <div className="image-slider">
        <div
          className="image-slide"
          id="one"
          style={{
            background: `url(https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80) no-repeat 50% 50%`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="image-slide"
          id="two"
          style={{
            background: `url(https://images.unsplash.com/photo-1509679708047-e0e562d21e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60) no-repeat 50% 50%`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="image-slide"
          id="three"
          style={{
            background: `url(https://images.unsplash.com/photo-1508215302842-8a015a452a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat 50% 50%`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="image-slide"
          id="four"
          style={{
            background: `url(https://images.unsplash.com/photo-1537510929030-2ffb7888f379?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80) no-repeat 50% 50%`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="image-slide"
          id="five"
          style={{
            background: `url(https://images.unsplash.com/photo-1552793084-49132af00ff1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2953&q=80) no-repeat 50% 50%`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
