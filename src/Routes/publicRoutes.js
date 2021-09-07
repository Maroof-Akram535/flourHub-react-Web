import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Store } from '../store/store';
export default function PublicRoutes({ component: Component, userauthenticated }) {
    var store = React.useContext(Store);
    return (
        <Route
            render={(routeProps) => (userauthenticated === false)
                ? <Component{...routeProps} route={routeProps.location.state === '/addproduct' ? null : '/'} />
                : (store.state.adminAuthenticated) ? <Redirect to='/admin' /> : <Redirect to='/cart' />
            }
        />
    )
}