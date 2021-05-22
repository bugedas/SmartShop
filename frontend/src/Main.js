import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/Core/MainPage';
import Products from './components/Product/ManageProductsPage';
import ProductPage from './components/Product/ProductPage';
import Auctions from './components/Auction/ManageAuctionsPage';
import AuctionPage from './components/Auction/AuctionPage';
import Recommended from './components/Product/RecommendedPage';
import MakeOrder from './components/Order/MakeOrderPage';
import MapRoute from './components/Order/MapRoute';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/products' component={Products}></Route>
      <Route exact path='/auctions' component={Auctions}></Route>
      <Route exact path='/product/:id' component={ProductPage} ></Route>
      <Route exact path='/auction/:id' component={AuctionPage} ></Route>
      <Route exact path='/recommended' component={Recommended}></Route>
      <Route exact path='/MakeOrder/:id' component={MakeOrder}></Route>
      <Route exact path='/map' component={MapRoute}></Route>
    </Switch>
  );
}

export default Main;