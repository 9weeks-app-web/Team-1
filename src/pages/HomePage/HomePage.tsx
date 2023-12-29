import React from "react";
import fireStore from "api/firestoreConfig";
import "./style.css";

function HomePage() {
  // firebase connect test
  console.log(fireStore);

  return <div className="container">홈!!!</div>;
}

export default HomePage;
