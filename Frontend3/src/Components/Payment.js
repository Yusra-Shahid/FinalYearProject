import React,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment =()=>{
    const [price , setprice] = useState(localStorage.getItem("payment"))
    const [product , setproduct] =useState({
        name: "React from FB",
        price: 10,
        productBy:"facebook"
    });

    const makePayment = token=>{
        const body ={
            token,
            product
        }
        const headers={
            "Content-Type":"application/json"
        }
        return fetch("/payment" ,{
            method:"POST",
            headers,
            body: JSON.stringify(body)
        }).then(response=>{
            console.log("RESPONCE", response)
            window.alert("Successful payment transfers")
        })
        .catch(error=>console.log(error));
    };
  
return(
    <>
  <StripeCheckout
      stripeKey="pk_test_51KbrNJKimnUFu9LYzk8lgjD4ngF1ZNHrI4lCKS2Z1eJWCgWTixGAfIYqCpXBIBWBxR1rxiu32kqOyF5eRT4ZUxfj003Y25Ehoc"
      token={makePayment}
      name="I-MedCare"
      amount={product.price*parseInt(Payment)}
  >
      <button type="button" className="btn btn-primary" height="20px" width="10px"> Pay Now </button>
  </StripeCheckout>
    </> 
)
}
export default Payment;