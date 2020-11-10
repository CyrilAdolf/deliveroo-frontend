import React from "react";

const Main = ({ categories, isLoading, orders, setOrders }) => {
  //
  // UPDATE ORDERS WITH NEW MEAL
  const updateUnique = (meal) => {
    let newOrders = [...orders];
    const obj = {
      key: meal.id,
      name: meal.title,
      price: meal.price,
      quantity: 1,
    };
    newOrders.push(obj);
    setOrders(newOrders);
    console.log(orders);
  };

  // IMPLEMENT QUANTITY ONLY
  const updateDuplicate = (meal) => {
    let newOrders = [...orders];
    meal.quantity++;
    setOrders(newOrders);
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
                    // orders.length === 0
                    //   ? updateUnique(meal)
                    //   : orders.map((order, i) => {
                    //       let isPresent = false;
                    //       return (
                    //         order.key === meal.id && updateDuplicate(order)
                    //       );
                    //       // : updateUnique(meal);
                    //     });
                    // return updateUnique(meal);
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
