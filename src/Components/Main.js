import React from "react";

const Main = ({ categories, isLoading, orders, setOrders }) => {
  //
  // UPDATE ORDERS WITH NEW MEAL
  const updateUnique = (meal) => {
    const newOrders = [...orders];
    let isPresent = false;
    for (let i = 0; i < newOrders.length; i++) {
      if (newOrders[i].key === meal.id) {
        newOrders[i].quantity++;
        isPresent = true;
        return setOrders(newOrders);
      }
    }
    if (!isPresent) {
      newOrders.push({
        key: meal.id,
        name: meal.title,
        price: meal.price,
        quantity: 1,
      });
      setOrders(newOrders);
    }
  };

  return isLoading ? (
    <span>Chargement...</span>
  ) : (
    <div className="main">
      {categories.map((category, i) => {
        return (
          <div className="category" key={i}>
            <h2>{category.name}</h2>
            <br />
            {category.meals.map((meal) => {
              return (
                <div
                  className="card"
                  key={meal.id}
                  // SET ORDERS STATE HERE
                  // SET ORDERS STATE HERE
                  onClick={() => {
                    updateUnique(meal);
                  }}
                >
                  <div>
                    <h3>{meal.title}</h3>
                    <p>
                      {meal.description.length > 60
                        ? meal.description.substring(0, 60)
                        : meal.description}
                    </p>
                    <span className="price"> {meal.price} € </span>
                    {meal.popular && (
                      <span className="fav">
                        <i className="fas fa-star"></i> Populaire
                      </span>
                    )}
                  </div>
                  {meal.picture ? (
                    <img src={meal.picture} alt="" />
                  ) : (
                    // EMPTY div ?
                    <div className="emptyImg"></div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
