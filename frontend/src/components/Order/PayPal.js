import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Button from '@material-ui/core/Button';
import MakeOrder from './MakeOrder';
import { Route } from 'react-router';
import SuccessfulPaymentPage from './SuccessfulPaymentPage';
import {updateOrder} from "./OrderFunctions";

const Paypal = (props) =>  {

    const [cancel, setCancel] = useState(false)
    const [orderCompleted, setOrderCompleted] = useState(false)
    const paypal = useRef()

    const stateToWaitingForPickup = () =>{
        const updatedOrder ={
            order_id: props.ord_id,
            price: props.productPrice,
            state: 'laukiama atsiėmimo',
        }
        updateOrder(updatedOrder);
    }

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
                    let k = await stateToWaitingForPickup();
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
                <SuccessfulPaymentPage productName={props.productName} productPrice={props.productPrice}/>
            ) : (
            <div>
                {cancel ? (
                    <MakeOrder />
                ) : (
                <div>
                    <h1>Pasirinkite apmokėjimo būdą</h1>
                    <h3>Apmokėti internetu:</h3>
                    <div ref={paypal}></div>
                    <h3>Apmokėti atsiimant prekes:</h3>
                    <Button  style={{maxWidth: '600px', maxHeight: '60px', minWidth: '600px', minHeight: '60px'}} variant="contained" color="primary" onClick={() => {stateToWaitingForPickup(); setOrderCompleted(true);}} className='button'>Mokėti parduotuvėje</Button> 
                    <Button onClick={() => {setCancel(true);}} className='button'>Atšaukti</Button>                
                </div>
                )}
            </div>
            )}
        </div>
    )
}

export default Paypal