import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Store from './Store';
import Booking from './Booking';
import MobileOrder from './MobileOrder';
import My from './My';

const Screen = () => {
  return (
    <>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/store" exact={true}>
        <Store />
      </Route>
      <Route path="/booking" exact={true}>
        <Booking />
      </Route>
      <Route path="/mobile_order" exact={true}>
        <MobileOrder />
      </Route>
      <Route path="/my" exact={true}>
        <My />
      </Route>
    </>
  );
};

export default React.memo(Screen);
