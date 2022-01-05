import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const axios = require('axios')

const KEY = "pk_test_51KBzbXBZ8OdDCVGbTnYrPmUGlyscekQaMesUx5ZuZslLDgb9eZRj2y96Ls0vHRlHuNQp9HY41M5oBlggEk172Ztv00YUy7S64i"

export default function Pay() {

    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:5000/api/checkout/payment', 
                    {
                        tokenId:stripeToken.id,
                        amount:2000,
                    }
                );
                console.log(res.data)
                history("/success")
            } catch (error) {
                console.log(error)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken, history]);

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {stripeToken ? (<span>Processing, Hold On a Moment</span>) : (
                
                <StripeCheckout 
                name='Dev Tech'
                image='https://i.ibb.co/RHDhb5r/9ccf7b00b9933758d84c8f6b2bf9185f.webp'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
                >
                <button style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer"
                }}>
                    Pay Now
                </button>
            </StripeCheckout>
        )}
        </div>
    )
}
