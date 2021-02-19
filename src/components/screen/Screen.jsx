import React, { Suspense, useCallback } from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Store = React.lazy(() => import('./Store'));
const Booking = React.lazy(() => import('./Booking'));
const MobileOrder = React.lazy(() => import('./MobileOrder'));
const My = React.lazy(() => import('./My'));
const Login = React.lazy(() => import('./Login'));

const Screen = () => {
  return (
    <>
      <Suspense fallback={'로딩 중...'}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/store" exact={true} component={Store} />
        <Route path="/booking" exact={true} component={Booking} />
        <Route path="/mobile_order" exact={true} component={MobileOrder} />
        <Route path="/my" exact={true} component={My} />
        <Route path="/login" exact={true} component={Login} />
      </Suspense>
    </>
  );
};

export default React.memo(Screen);
