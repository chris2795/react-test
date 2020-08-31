import React, { Component } from "react";
import CardItem from "./CardItem";
import "../css/Card.css";

export default class Card extends Component {
  state = {
    services: [
      {
        image: "images/image_1.jpg",
        title: "Free CockTails",
        info:
          "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!",
        path: "/services",
      },
      {
        image: "images/image_2.jpg",
        title: "Endless Hiking",
        info:
          "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!",
        path: "/services",
      },
      {
        image: "images/image_3.jpg",
        title: "Free Shuttle Van",
        info:
          "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!",
        path: "/services",
      },
      {
        image: "images/image_4.jpg",
        title: "Strongest Beer",
        info:
          "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!",
        path: "/services",
      },
    ],
  };
  render() {
    return (
      <div className="cards">
        <h1> Check out these Latest Update!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {this.state.services.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    src={item.image}
                    text={item.info}
                    label={item.title}
                    path={item.path}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
