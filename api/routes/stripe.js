const router = require('express').Router();
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51KBzbXBZ8OdDCVGb8lAPJcon5ewwC7qXDGf4uLYlX2cPChH4EiEAIzvJLIQfgzbiWC8zJGae3bBhlpcXGzuBoam100E4xXsui1');

router.post('/payment', (req,res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = router;