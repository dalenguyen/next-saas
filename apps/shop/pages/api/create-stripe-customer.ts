import { supabase } from './../../utils'
import initStripe from 'stripe'

export default async function handler(req, res) {

    console.log('body-----', req.body)

    if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
        return res.status(401).send('You are not authorized to call this API')
    }

    const stripe = new initStripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2022-08-01'
    })
    const customer = await stripe.customers.create({
        email: req.body.record.email
    })

    await supabase.from('profiles').update({
        stripe_customer: customer.id
    }).eq('id', req.body.record.id)

    return res.send({message: `Customer is created with ${customer.id}`})
  }