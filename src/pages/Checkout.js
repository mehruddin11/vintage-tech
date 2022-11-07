import React from "react";
import { useHistory } from "react-router-dom";
import { CartProvider, useGlobalCartContext } from "../context/cart";
import { useGlobalUserProvider } from "../context/user";
import EmtyCart from "../components/Cart/EmptyCart";
// react stripe element

//
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from "react-stripe-elements";

import SumbitOrder from "../strapi/submitOrder";

function Checkout(props) {
  const history = useHistory();
  const { total, ClearCart, cart } = useGlobalCartContext();
  const { user, ShowAlert, HideAlert, alert } = useGlobalUserProvider();
  const [name, setName] = React.useState("");
  // const [adress, setAdress]= React.useState('')
  const [Error, setError] = React.useState("");
  const isEmpty = !name || alert.show;
  async function HandleSubmit(e) {
    ShowAlert({ msg: "sumitting order... please wait" });
    e.preventDefault();
    const respone = await props.stripe

      .createToken()
      
      .catch((err) => console.log("erris ", err));
      
    const { token } = respone
    if (token) {
      setError("");
      const { id } = token;
      let order = await SumbitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      });
      // console.log(order)
      // console.log(order);
      // console.log(id)
      
      if (order) {
        
        ShowAlert({ msg: "Thanks for shopping" });
        ClearCart();
        history.push("/");
        return;
      } else {
        ShowAlert({
          msg: "there was an error with yout order. please try again",
          type: "danger",
        });
      }
    } else {
      HideAlert();
      setError(respone.error.message);
    }
  }
  if (CartProvider.length < 1) {
    return <EmtyCart />;
  }

  return (
    <section className="section form">
      <h2 className="section-title"> checkout</h2>

      <form className="checkout-form">
        <h3>
          
          order total :<span> &#8377;{total} </span>{" "}
        </h3>
        {/* single input  */}
        <div className="form-control">
          <label htmlFor="=name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <label htmlFor="=name">Adress</label>
          <input
            type="text"
            id="name"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          /> */}
        </div>
        {/* end of single input */}

        {/* info about card */}
        <div className="stripe-input">
          <label htmlFor="card-element"> Credit of Debit Card</label>
          <p className="stripe-info">
            {" "}
            test using this credit card :<span>4242 4242 4242 4242</span>
            <br />
            enter any 5 degit of zip code
            <br />
            enter any 3 didgits for CVC
          </p>
        </div>

        {/* end of about cart  */}

        {/* stripe elements */}
        <CardElement className="card-element" />

        {/* stripe eeror  */}
        {Error && <p className="form-empty"> {Error} </p>}
        {/* empty value  */}
        {isEmpty ? (
          <p className="form-empty">pls fill out name field</p>
        ) : (
          <button
            type="sumbit"
            onClick={HandleSubmit}
            className="btn btn-primary btn-block"
          >
            Sumbit
          </button>
        )}
      </form>
    </section>
  );
}

const CardForm = injectStripe(Checkout);

const Stripewrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_51LdxG3SF7lj0sVgyv5s0IRyZu2qFNIueA5dN2cJZUTwCONR8WkFvcIlL2rSuezZaMX0cx2cFf6SZWJPcVOVdMUNm00OLxrZwzV">
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};
export default Stripewrapper;
