import React, { useState, useEffect } from "react";
import "./App.css";
// NEEDED TO ACCESS BACKEND / COMBINE WITH USEEFFECT HOOKS
import axios from "axios";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";

function App() {
  const [data, setData] = useState({});
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://exo-deliveroo-back.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // SETUP WHEN WE WANT TO START THE fecthData().
  useEffect(() => {
    fetchData();
    // ONLY ON LOADING
  }, []);

  return (
    <div>
      <Header restaurant={data.restaurant} isLoading={isLoading} />
      <div className="container sections">
        <Main
          categories={data.categories}
          isLoading={isLoading}
          orders={orders}
          setOrders={setOrders}
        />
        <Aside orders={orders} setOrders={setOrders} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
