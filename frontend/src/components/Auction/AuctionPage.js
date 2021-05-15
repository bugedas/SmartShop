
import React, {useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Core/Menu'
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {addAuction,updateAuction} from "./AuctionFunctions";

const AuctionPage = (props) => {


    const [auctions,setAuctions]=useState([]);
    const [priceBid,setPriceBid]=useState(0);

    //Fetch data
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

    const ChangeToActive = (startedUpdatedAuction) => {
        updateAuction(startedUpdatedAuction).then((res)=>{
        });
    }

    const CheckInLine = () => {
        axios
             .post("http://localhost:5000/auctions/getAuctions")
            .then((response) => {
               const data = response.data;
               const filteredData = data.filter(filtered => filtered.State === 'neprasidėjes')
               const oneAuction = filteredData.pop()
               if(typeof oneAuction != 'undefined'){
                const startedUpdatedAuction ={
                    id: oneAuction._id,
                    name: oneAuction.Name,
                    startPrice: oneAuction.StartPrice,
                    price: oneAuction.Price,
                    weight: oneAuction.Weight,
                    description: oneAuction.Description,
                    supplier: oneAuction.Suplier,
                    state: 'prasidėjęs',
                }
                ChangeToActive(startedUpdatedAuction)
               }
             })
             .catch(() => {
              alert("ERROR");
             });
    }


    const MakeABet = () =>{
        //SaveData
        const updatedAuction ={
            id: props.match.params.id,
            name: auctions.Name,
            startPrice: auctions.StartPrice,
            price: priceBid,
            weight: auctions.Weight,
            description: auctions.Description,
            supplier: auctions.Suplier,
            state: auctions.State,
        }
        updateAuction(updatedAuction).then((res)=>{
            window.location.reload(false);
        });
    }

    const stateToNotStarted = () =>{
        const updatedAuction ={
            id: props.match.params.id,
            name: auctions.Name,
            startPrice: auctions.StartPrice,
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
            startPrice: auctions.StartPrice,
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

    const SubmitWinner = () =>{

        CheckInLine();

        const ChangeToFinished ={
            id: props.match.params.id,
            name: auctions.Name,
            startPrice: auctions.StartPrice,
            price: auctions.Price,
            madeBy: "madeBy",
            weight: auctions.Weight,
            description: auctions.Description,
            supplier: auctions.Suplier,
            state: 'pasibaigęs',
        }

        updateAuction(ChangeToFinished).then((res)=>{
            window.location.reload(false);
        });
    }


    return (
        <div>
            <Paper elevation={0}>
                <Menu/>
                    <div>
                        {(auctions.State != 'neprasidėjes' && auctions.State != 'pasibaigęs') && (
                            <Button 
                                variant="contained"
                                color="primary"
                                className='changeAuctionState'
                                onClick={stateToNotStarted}
                            >
                                Neprasidejes
                            </Button>
                        )}
                        {(auctions.State != 'prasidėjęs' && auctions.State != 'pasibaigęs') && (
                            <Button 
                                variant="contained"
                                color="primary"
                                className='changeAuctionState'
                                onClick={stateToStarted}
                            >
                                Prasidėjęs
                            </Button>
                        )}
                        {(auctions.State != 'neprasidėjes' && auctions.State != 'pasibaigęs') && (
                            <Button 
                                variant="contained"
                                color="primary"
                                className='changeAuctionState'
                                onClick={SubmitWinner}
                            >
                                Patvirtinti nugalėtoją
                            </Button>
                        )}
                    </div>
                <Paper elevation={1}>
                                    {console.log(auctions)}
                    <h1>Aukcionas dėl prekės: {auctions.Name} </h1>
                    <h3>Pradinė Kaina: {auctions.StartPrice}</h3>
                    {auctions.State !== 'pasibaigęs' && 
                    <h3>Dabartinė Kaina: {auctions.Price}</h3>}
                    <h3>Svoris: {auctions.Weight}</h3>
                    <h3>Aprašymas: {auctions.Description}</h3>
                    <h3>Tiekėjas: {auctions.Suplier}</h3>
                    <h3>Būsena: {auctions.State}</h3>
                    {auctions.State === 'pasibaigęs' && 
                        <>
                            <h1>Laimėtojas - statęs {auctions.Price}EUR</h1>
                        </>
                    }
                    {auctions.State === 'prasidėjęs' && (
                        <div>
                            <TextField className='textField' label="Kaina" value={priceBid === 0 ? auctions.Price : priceBid} onChange={e => setPriceBid(e.target.value)} />
                            <Button 
                                variant="contained"
                                color="primary"
                                className='makeBid'
                                onClick={MakeABet}
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
