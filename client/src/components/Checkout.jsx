import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    // console.log(token);
  };
  return (
    <>
      {loading && 
      // <div className="d-flex justify-content-center align-items-center" style={{height: "50vh"}}>
          	<Loader />
          // </div>
        }
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KbKGiSGiqekAGBqgShzqDNCcMVjJiGrwD5cF1p6xKDJX2EvFjGDGoLaUspukDwi7QouJyQ784j5iabO8CbTlL4U00Oc4Rm2NH"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
