import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const KEY = "pk_test_51KBzbXBZ8OdDCVGbsRMXNCNWX7dkJ6X0rYO3SJsECM5pesLfq8tyDzbhmQ3HzUermrDamIW6Dq8c9yJt8MxjTyXH00PKdLkt7z"

export default function Pay() {
    const onToken = (token) => {
        console.log(token)
    }
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
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
        </div>
    )
}
