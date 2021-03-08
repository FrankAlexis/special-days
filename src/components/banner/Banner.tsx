import "./Banner.scss";
import React from "react";
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
      {image:'https://images.unsplash.com/photo-1615081423479-1e819ec2853e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' , text: 'numero 1'},
      {image:'https://images.unsplash.com/photo-1611095567319-2f4c389168a9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' , text: 'numero 1'},
      {image:'https://images.unsplash.com/photo-1615081423479-1e819ec2853e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' , text: 'numero 1'},
    ]

  return (
    <div className="banner-container">
      <Slider {...settings}>
          {banners && banners.map((banner, index) => (
            <div  className="banner-container__slide">
              <img src={banner.image} alt=""/>
              <h2 >{banner.text}</h2>
            </div>
          ))}
        </Slider>
    </div>
  );
}
