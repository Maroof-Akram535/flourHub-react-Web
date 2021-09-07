import React from 'react';
import '../Styles/Layout.css'
import Header from './Header/Header';
import  "antd/dist/antd.css";
import Content from './Content/Content';
import Footer from './Footer/Footer';
export default function Mainpage()
  {
      return(
        <div className="layout">
        <Header/>
        <Content/>
        <Footer/>
      </div>
      );
   
  
  }
