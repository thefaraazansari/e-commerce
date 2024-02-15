import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import "./styles.css";

export default function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h1 className="heading">Products List</h1>
        <div className="wrapper">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}
