import React from "react";
import Product from "./Product";

const Main = ({ products }) => {
  return (
    <main className='col-2 block'>
      <h2>Products</h2>
      <div className='row'>
        {products.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </div>
    </main>
  );
};

export default Main;
