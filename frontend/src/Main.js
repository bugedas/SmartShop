import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import Products from './components/ManageProductsPage';
import ProductPage from './components/ProductPage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/products' component={Products}></Route>
      <Route exact path='/product/:id' component={ProductPage} ></Route>
    </Switch>
  );
}

export default Main;