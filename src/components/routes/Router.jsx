import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('./home/Home'));
const Store = React.lazy(() => import('./store/Store'));
const Booking = React.lazy(() => import('./booking/Booking'));
const MobileOrder = React.lazy(() => import('./mobile_order/MobileOrder'));
const My = React.lazy(() => import('./my/My'));
const Login = React.lazy(() => import('./login/Login'));
const Join = React.lazy(() => import('./join/Join'));

/* <Route component={Component}/> 로 작성하면
  같은 버튼을 눌렀을 때 리렌더링이 일어남. 이렇게 작성하니 그렇지 않음.
*/

const Router = () => {
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

        <Route path="/join" exact={true}>
          <Join />
        </Route>
      </Suspense>
    </>
  );
};

export default React.memo(Router);
