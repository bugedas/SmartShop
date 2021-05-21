import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addAuction,updateAuction} from "./AuctionFunctions";

import '../../css/ProductFormStyles.css'
import { AlternateEmail } from "@material-ui/icons";

const AuctionForm = (props) => {


    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [madeBy,setMadeBy] = useState("");
    const [weight,setWeight] = useState("");
    const [description,setDescription] = useState("");
    const [supplier,setSupplier] = useState("");

    const Submit = () =>{
        if( name == "" || price == ""){
            alert("Pavadinimas ir Kaina privalo būti užpildyti")
        }
        else{
            if(props.update==true){
                const updatedAuction ={
                    id: props.id,
                    name: name,
                    price: price,
                    madeBy: madeBy,
                    weight: weight,
                    description: description,
                    supplier: supplier,

                }

                updateAuction(updatedAuction).then((res)=>{
                    window.location.reload(false);
                });
            
            
            }
            else{
                const newAuction ={
                    name: name,
                    price: price,
                    madeBy: madeBy,
                    weight: weight,
                    description: description,
                    supplier: supplier,
                }
                //Create
                addAuction(newAuction).then((res)=>{
                    window.location.reload(false);
                });
            }
        }
 
    }



    return (
        <div className='form'>
            <form>
                <TextField className='textField' label="Prekės pavadinimas" value={name} onChange={e => setName(e.target.value)} />
                <TextField className='textField' label="Kaina" value={price} onChange={e => setPrice(e.target.value)} />
                <TextField className='textField' label="Kilmės šalis" value={madeBy} onChange={e => setMadeBy(e.target.value)} />
                <TextField className='textField' label="Svoris" value={weight} onChange={e => setWeight(e.target.value)} />
                <TextField
                    className='textField'
                    label="Aprašymas"
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                    multiline
                />
                <TextField className='textField' label="Tiekėjas" value={supplier} onChange={e => setSupplier(e.target.value)} />

                <Button className='button' onClick={Submit}>Submit</Button>
            </form>

        </div>
    )
}

export default AuctionForm
