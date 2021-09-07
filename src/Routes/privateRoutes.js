import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cart from '../Pages/cartPage/cart';
export default function PrivateRoutes({ component: Component, userauthenticated }) {
    if (Component === Cart) {
        var prevPath = '/cart';
    }
    else {
        var prevPath = '/addproduct';
    }
    return (
        <Route
            render={(routeProps) => userauthenticated === true
                ? <Component{...routeProps} />
                : <Redirect to={{
                    pathname: '/login',
                    state: prevPath
                }} />
            }
        />
    )
}