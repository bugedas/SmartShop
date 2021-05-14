
import React, {useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Menu'
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {addAuction,updateAuction} from "./AuctionFunctions";

const AuctionPage = (props) => {


    const [auctions,setAuctions]=useState([]);

    useEffect(() => { 
            axios
            .post("http://localhost:5000/auctions/getAuctionById",{
                id:props.match.params.id
            })
            .then((response) => {
              const data = response.data;
              setAuctions(data);
            })
            .catch(() => {
              alert("ERROR");
            });
    },[]); 

    const onBid = () =>{

    }

    const stateToNotStarted = () =>{
        const updatedAuction ={
            id: props.match.params.id,
            name: auctions.Name,
            price: auctions.Price,
            weight: auctions.Weight,
            description: auctions.Description,
            supplier: auctions.Suplier,
            state: 'neprasidėjes',
        }
        updateAuction(updatedAuction).then((res)=>{
            window.location.reload(false);
        });
    }

    const stateToStarted = () =>{
        const updatedAuction ={
            id: props.match.params.id,
            name: auctions.Name,
            price: auctions.Price,
            weight: auctions.Weight,
            description: auctions.Description,
            supplier: auctions.Suplier,
            state: 'prasidėjęs',
        }
        updateAuction(updatedAuction).then((res)=>{
            window.location.reload(false);
        });
    }

    const stateToEnded = () =>{
        const updatedAuction ={
            id: props.match.params.id,
            name: auctions.Name,
            price: auctions.Price,
            madeBy: "madeBy",
            weight: auctions.Weight,
            description: auctions.Description,
            supplier: auctions.Suplier,
            state: 'pasibaigęs',
        }
        updateAuction(updatedAuction).then((res)=>{
            window.location.reload(false);
        });
    }


    return (
        <div>
            <Paper elevation={0}>
                <Menu/>
                    <div>
                        {auctions.State != 'neprasidėjes' && (
                            <Button 
                                variant="contained"
                                color="primary"
                                className='changeAuctionState'
                                onClick={stateToNotStarted}
                            >
                                Neprasidejes
                            </Button>
                        )}
                        {auctions.State != 'prasidėjęs' && (
                            <Button 
                                variant="contained"
                                color="primary"
                                className='changeAuctionState'
                                onClick={stateToStarted}
                            >
                                Prasidėjęs
                            </Button>
                        )}
                        {auctions.State != 'pasibaigęs' && (
                            <Button 
                                variant="contained"
                                color="primary"
                                className='changeAuctionState'
                                onClick={stateToEnded}
                            >
                                Pasibaigęs
                            </Button>
                        )}
                    </div>
                <Paper elevation={1}>

                    <h1>Aukcionas dėl prekės: {auctions.Name} </h1>
                    <h3>Pradinė Kaina: {auctions.Name}</h3>
                    <h3>Dabartinė Kaina: {auctions.Price}</h3>
                    <h3>Svoris: {auctions.Weight}</h3>
                    <h3>Aprašymas: {auctions.Description}</h3>
                    <h3>Tiekėjas: {auctions.Suplier}</h3>
                    <h3>Būsena: {auctions.State}</h3>
                    {console.log(auctions)}
                    {auctions.State === 'prasidėjęs' && (
                        <div>
                            <TextField className='textField' label="Kaina" value={auctions.Price + 1}/* onChange={} */ />
                            <Button 
                                variant="contained"
                                color="primary"
                                className='makeBid'
                                onClick={onBid}
                            >
                                Statyti
                            </Button>
                        </div>
                    )}
                </Paper>
            </Paper>

        </div>
    )
}

export default AuctionPage
