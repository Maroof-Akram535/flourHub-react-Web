import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import Mainpage from './Pages/MainPage/Mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreContextProvider } from './store/store';
function App() {
    return (
        <StoreContextProvider>
            <Mainpage />
        </StoreContextProvider>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));