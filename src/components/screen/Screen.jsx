import React, { Suspense, useCallback } from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Store = React.lazy(() => import('./Store'));
const Booking = React.lazy(() => import('./Booking'));
const MobileOrder = React.lazy(() => import('./MobileOrder'));
const My = React.lazy(() => import('./My'));
const Login = React.lazy(() => import('./Login'));

/* <Route component={Component}/> 로 작성하면
  같은 버튼을 눌렀을 때 리렌더링이 일어남. 이렇게 작성하니 그렇지 않음.
*/

const Screen = () => {
  return (
    <>
      <Suspense fallback={'로딩 중...'}>
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

        <Route path="/login" exact={true}>
          <Login />
        </Route>
      </Suspense>
    </>
  );
};

export default React.memo(Screen);
