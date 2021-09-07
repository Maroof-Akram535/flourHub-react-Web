import React, { Component } from 'react'
import { Switch, Redirect, HashRouter, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/loginPage';
import HomePage from '../Pages/HomePage/homePage';
import SingUpPage from '../Pages/signUpPage/singUp';
import FlourProducts from '../Pages/HomePage/showproductsPage/flourProducts';
import AddProduct from '../Pages/adminPage/addProduct';
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';
import showAllProducts from '../Pages/adminPage/showAllProducts';
import Cart from '../Pages/cartPage/cart';
import productDetailPage from '../Pages/HomePage/showproductsPage/productDetailPage';
import OrderDetails from '../Pages/OrderPage/orderDetailpage';
import ShowAllOrders from '../Pages/adminPage/showAllorders';
import { Store } from '../store/store';
export default function (props) {
    var store = React.useContext(Store);
    var userAuth = store.state.userAuthenticated;
    return (
        <HashRouter>
            <Redirect to='/' />
            <Switch>
                {userAuth ? <Route exact path='/' component={HomePage} /> : <PublicRoutes exact path='/' component={HomePage} userauthenticated={store.state.userAuthenticated} />}
                <PublicRoutes path='/signup' component={SingUpPage} userauthenticated={store.state.userAuthenticated} />
                <PublicRoutes path='/login' component={LoginPage} userauthenticated={store.state.userAuthenticated ? store.state.userAuthenticated : store.state.adminAuthenticated} />
                <PrivateRoutes path='/cart' component={Cart} userauthenticated={store.state.userAuthenticated} />
                <PrivateRoutes path='/orderDetails' component={OrderDetails} userauthenticated={store.state.userAuthenticated} />
                {userAuth ? <Route exact path='/wheatflour' component={FlourProducts} /> : <PublicRoutes exact path='/wheatflour' component={FlourProducts} userauthenticated={store.state.userAuthenticated} />}
                <PrivateRoutes path='/admin' component={AddProduct} userauthenticated={store.state.adminAuthenticated} />
                <PrivateRoutes path='/showAllProducts' component={showAllProducts} userauthenticated={store.state.adminAuthenticated} />
                <PrivateRoutes path='/showAllOrders' component={ShowAllOrders} userauthenticated={store.state.adminAuthenticated} />
                {userAuth ? <Route exact path='/wheatDetailPage' component={productDetailPage} /> : <PublicRoutes path='/wheatDetailPage' component={productDetailPage} userauthenticated={store.state.userAuthenticated} />
                }
            </Switch>
        </HashRouter>
    );
}
