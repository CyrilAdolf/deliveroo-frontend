import React from "react";

const Main = ({ categories, isLoading, orders, setOrders }) => {
  //
  // UPDATE ORDERS WITH NEW MEAL
  const updateOrder = (meal) => {
    const newOrders = [...orders];
    let checkId = false;
    for (let i = 0; i < newOrders.length; i++) {
      if (newOrders[i].key === meal.id) {
        newOrders[i].quantity++;
        checkId = true;
        return setOrders(newOrders);
      }
    }
    // ONLY IF NEW ID
    if (!checkId) {
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
    <span>En cours de chargement...</span>
  ) : (
    <div className="main">
      {categories.map((category, i) => {
        return (
          <div className="category" key={i}>
            <h2>{category.name}</h2>
            {category.meals.map((meal) => {
              return (
                <div
                  className="card"
                  key={meal.id}
                  // SET STATE HERE
                  onClick={() => {
                    updateOrder(meal);
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
