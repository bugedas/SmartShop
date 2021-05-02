import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import Products from './components/ManageProductsPage';
import ProductPage from './components/ProductPage';
import Auctions from './components/Auction/ManageAuctionsPage';
import AuctionPage from './components/Auction/AuctionPage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/products' component={Products}></Route>
      <Route exact path='/auctions' component={Auctions}></Route>
      <Route exact path='/product/:id' component={ProductPage} ></Route>
      <Route exact path='/auction/:id' component={AuctionPage} ></Route>
    </Switch>
  );
}

export default Main;