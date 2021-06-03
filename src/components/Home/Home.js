import React, { useEffect, useState } from "react";
import Transport from "../Transport/Transport";
import "./Home.css";
import Header from "../Header/Header";
import transportData from "../../Fakedata/data.json";

const Home = () => {
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    setTransports(transportData);
  }, []);
  return (
    <div className="container">
      <Header></Header>
      {transports.map((transport) => (
        <Transport transport={transport}></Transport>
      ))}
    </div>
  );
};

export default Home;
