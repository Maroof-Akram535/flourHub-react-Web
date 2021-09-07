import React from 'react'
import { Menu, Dropdown, Button, message } from 'antd';
import { UserOutlined, QuestionCircleOutlined, LogoutOutlined, ToolOutlined } from '@ant-design/icons';
import { Store } from '../store/store';
export default function UserProfileDropDown() {
    var store = React.useContext(Store);
    console.log(store);
    function handleMenuClick(e) {
        localStorage.clear();
        window.location.href = '/';
        sessionStorage.removeItem("accessToken");

    }
    const menu = (
        <Menu icon={<UserOutlined />}>
            <Menu.Item key="1" icon={<QuestionCircleOutlined />} >
                Help ?
            </Menu.Item>
            <Menu.Item key="2" icon={< ToolOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item onClick={handleMenuClick} key="3" icon={< LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                {store.state.userInfo.name}
            </Dropdown.Button>
        </div>
    )
}
