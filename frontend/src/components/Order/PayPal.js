import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Button from '@material-ui/core/Button';
import MakeOrder from './MakeOrder';
import { Route } from 'react-router';
import SuccessfulPaymentPage from './SuccessfulPaymentPage';

const Paypal = (props) =>  {

    const [cancel, setCancel] = useState(false)
    const [orderCompleted, setOrderCompleted] = useState(false)
    const paypal = useRef()

    useEffect(()=> {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: props.productName,
                            amount: {
                                currency_code: "EUR",
                                value: props.productPrice
                            }
                        }
                    ] 
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                if (order.status === "COMPLETED") {
                    setOrderCompleted(true)
                }
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (        
        <div>
            {orderCompleted ? (
                <SuccessfulPaymentPage />
            ) : (
            <div>
                {cancel ? (
                    <MakeOrder />
                ) : (
                <div>
                    <h1>Pasirinkite apmokėjimo būdą</h1>
                    <div ref={paypal}></div>
                    <Button onClick={() => {setCancel(true);}} className='button'>Atšaukti</Button>                
                </div>
                )}
            </div>
            )}
        </div>
    )
}

export default Paypal