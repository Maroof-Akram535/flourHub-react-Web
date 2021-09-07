import React, { useState } from 'react';
import '../../assests/styles/Mainpage.css'
import Header from '../parts/Header/Header';
import "antd/dist/antd.css";
import Content from '../parts/Content/Content';
import Sider from '../parts/SideBar/sider';
import { Layout } from 'antd';
import adminSideBar from '../parts/SideBar/sideBarHelpers/adminSideBar';
import userSideBar from '../parts/SideBar/sideBarHelpers/userSideBar';
import cartSiderBar from '../../Pages/parts/SideBar/sideBarHelpers/cartSiderBar';
import { Store } from '../../store/store';
export default function Mainpage() {
  var store = React.useContext(Store);
  var siderBarItems = userSideBar;
  if (store.state.adminAuthenticated === true || store.state.userAuthenticated === true) {
    store.state.adminAuthenticated ? siderBarItems = adminSideBar : siderBarItems = cartSiderBar;
  }
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle)
  };
  return (
    <div>
      <Layout>
        <Sider siderBarItems={siderBarItems} toggle={toggle} />
        <Layout className="site-layout" >
          <Header onToggle={onToggle} />
          <Content />
        </Layout>
      </Layout>
    </div>
  );
}
