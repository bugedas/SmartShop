
import React, {useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Menu'
import Auction from './Auction';
import axios from "axios";
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
    }); 


    return (
        <div>
            
            <Paper elevation={0}>
                <Menu/>
                <Paper elevation={1}>

                    <h1>Aukcionas dėl prekės: {auctions.Name} </h1>
                    <h3>Pradinė Kaina: {auctions.Name}</h3>
                    <h3>Dabartinė Kaina:</h3>
                    <h3>Svoris: {auctions.Weight}</h3>
                    <h3>Aprašymas: {auctions.Description}</h3>
                    <h3>Tiekėjas: {auctions.Suplier}</h3>
                    <h3>Būsena: {auctions.State}</h3>

                </Paper>
            </Paper>

        </div>
    )
}

export default AuctionPage
