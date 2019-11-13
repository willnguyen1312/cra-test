import React from "react";
import { MyContext } from "./components/Provider";

const AddToCartButton = () => {
  return (
    <MyContext.Consumer>
      {(context: any) => {
        const { onAddToCartClick } = context;
        return <button onClick={onAddToCartClick}>Add to Cart</button>;
      }}
    </MyContext.Consumer>
  );
};

export default AddToCartButton;
