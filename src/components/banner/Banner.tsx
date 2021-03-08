import "./Banner.scss";
import React, { Fragment } from "react";
import Slider from "react-slick";


export default function Banner() {

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.15,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    };

    const banners = [
      {image:'https://s3.amazonaws.com/cdn.experimentality.co/Imagenes/banner2.jpeg' , text: '"Una mujer debe ser dos cosas: quien ella quiera y lo que ella quiera. Y ustedes eligieron ser unas tesas"'},
      {image:'https://s3.amazonaws.com/cdn.experimentality.co/Imagenes/banner1.jpeg' , text: '"Para mi la mujer es una semidiosa capaz de dar vida y enseñar amar"'},
      {image:'https://s3.amazonaws.com/cdn.experimentality.co/Imagenes/banner3.jpeg' , text: '"Algunas personas temen al fuego, las mujeres tienden a convertirse en él y es su llama la que aviva, empuja y da forma a grandes progresos en la humanidad"'},
      {image:'https://s3.amazonaws.com/cdn.experimentality.co/Imagenes/banner4.jpeg' , text: '"Ellas siempre un paso por delante, determinantes, audaces e incansables, cuando este juego de la vida solo ha tenido para ellas su modo mas difícil"'},
      {image:'https://s3.amazonaws.com/cdn.experimentality.co/Imagenes/banner5.jpeg' , text: '"Puede juzgarse el grado de civilización de un pueblo por la posición social de la mujer"'},
      
    ]

  return (
    <div className="banner-container">
      <Slider {...settings}>
          {banners && banners.map((banner, index) => (
           <Fragment>
              <div  className="banner-container__slide">
                <img src={banner.image} alt=""/>
                <h2>{banner.text}</h2>
              </div>
              
           </Fragment>
          ))}
        </Slider>
    </div>
  );
}
