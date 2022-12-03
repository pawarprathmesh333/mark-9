import "./styles.css";
import React, { useState } from "react";

var fooditems = {
  Chicken: [
    {
      dishName: "Malvani Chicken",
      ratings: "4/5"
    },
    {
      dishName: "Butter Chicken",
      ratings: "3.5/5"
    },
    {
      dishName: "Chicken Biryani",
      ratings: "5/5"
    }
  ],
  Mutton: [
    {
      dishName: "Kolhapuri Mutton",
      ratings: "4/5"
    },
    {
      dishName: "Mutton Pahadi",
      ratings: "4/5"
    },
    {
      dishName: "Mutton Masala",
      ratings: "3/5"
    }
  ],
  Paneer: [
    {
      dishName: "Shahi Paneer",
      ratings: "3/5"
    },
    {
      dishName: "Paneer Tikka",
      ratings: "4/5"
    },
    {
      dishName: "Palak Paneer",
      ratings: "4/5"
    }
  ],
  Fish: [
    {
      dishName: "Surmai Fry",
      ratings: "4/5"
    },
    {
      dishName: "Paplate Fry",
      ratings: "3/5"
    },
    {
      dishName: "Prons Fry",
      ratings: "5/5"
    }
  ]
};

var genre = Object.keys(fooditems);
export default function App() {
  var [showgenre, setgenre] = useState("Chicken");
  function clickHandler(item) {
    setgenre(item);
  }
  return (
    <section style={{ width: "70%", margin: "auto" }}>
      <div className="App" style={{ textAlign: "left" }}>
        <h1>🍲Food Recomendation</h1>
        <p>Checkout my favorite food items. Select a genre to get started</p>

        <div style={{ margin: "2rem 0rem" }}>
          {genre.map(function (item) {
            return (
              <button onClick={() => clickHandler(item)} key={item}>
                {item}
              </button>
            );
          })}
        </div>
        <hr />
        <div>
          {fooditems[showgenre].map(function (dish) {
            return (
              <ul>
                <li key={dish.dishName}>
                  <div style={{ fontSize: "larger" }}>{dish.dishName}</div>
                  <div style={{ fontSize: "smaller" }}>{dish.ratings}</div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}
