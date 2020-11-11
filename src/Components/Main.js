import React from "react";
import Card from "./Card";

const Main = ({ categories, isLoading, orders, setOrders }) => {
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="main">
      {categories.map((category, i) => {
        return (
          <div className="category" key={i}>
            <h2>{category.name}</h2>
            {category.meals.map((meal) => {
              return <Card meal={meal} orders={orders} setOrders={setOrders} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
