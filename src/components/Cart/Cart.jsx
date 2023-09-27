import React, { useState } from "react";
import "./Cart.scss";

import RowOne from "./Row-1/Row-1";
import RowThree from "./Row-3/Row-3";
import RowFour from "./Row-4/Row-4";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const Cart = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });

  const removeFromCart = (product) => {
    console.log(cart)
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(cart)
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <div className="formWrapper">
          <div className="cart">
            <div className="card_body">
              <Form method="POST">
                <h2 className="title">Registration Form</h2>
                <RowOne></RowOne>
                <RowThree></RowThree>
                <RowFour></RowFour>
                <button className="btn" type="submit">
                  Submit
                </button>
              </Form>
            </div>
            <div className="cart-container">
              <h2>Shopping Cart</h2>
              <ul>
                {cart.map((product) => (
                  <li key={product.id}>
                    <p>{product.name}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={() => removeFromCart(product)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Cart;
