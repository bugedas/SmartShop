import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Button from '@material-ui/core/Button';
import MakeOrder from './MakeOrder';

export default function Paypal() {

    const [cancel, setCancel] = useState(false)
    const paypal = useRef()

    useEffect(()=> {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Item table",
                            amount: {
                                currency_code: "EUR",
                                value: 650.00
                            }
                        }
                    ] 
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (
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
    )
}