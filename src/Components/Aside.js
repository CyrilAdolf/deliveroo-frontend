import React from "react";

const Aside = ({ orders, setOrders }) => {
  const deliveryPrice = 2.5;
  const CalculTotal = (x) => {
    let result = x || 0;
    orders.forEach((order) => {
      result += Number(order.quantity) * Number(order.price);
    });
    return result.toFixed(2);
  };
  return (
    <div className="aside">
      {orders.length === 0 ? (
        <div className="empty">PANIER VIDE</div>
      ) : (
        <div className="center">
          <div className="confirm">Valider mon panier</div>
          {orders.map((order, i) => {
            return (
              <div key={i} className="orderLine">
                <div className="quantity">
                  <button
                    onClick={() => {
                      let newOrders = [...orders];
                      order.quantity--;
                      // NEED TO BE FIXED , USE FILTER?
                      if (order.quantity === 0) {
                        newOrders.splice(order.key, 1);
                      }
                      // NEED TO BE FIXED
                      setOrders(newOrders);
                    }}
                  >
                    -
                  </button>
                  <p>{order.quantity}</p>
                  <button
                    onClick={() => {
                      let newOrders = [...orders];
                      order.quantity++;
                      setOrders(newOrders);
                    }}
                  >
                    +
                  </button>
                </div>
                <p className="name">{order.name}</p>
                <div className="priceUnit">
                  <p>{(order.price * order.quantity).toFixed(2)} €</p>
                </div>
              </div>
            );
          })}
          <div className="total-1">
            <div>
              <p>Sous-total</p>
              <p>{CalculTotal()} €</p>
            </div>
            <div>
              <p>Frais de livraison</p>
              <p> {deliveryPrice} € </p>
            </div>
          </div>
          <div className="total-2">
            <p>Total</p>
            <p>{CalculTotal(deliveryPrice)} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aside;
