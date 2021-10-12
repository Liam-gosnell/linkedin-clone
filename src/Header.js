import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
    return (
        <div className='header'>


            <div className="header__left">

                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar="https://assets.website-files.com/5f2bd7b4c1df8f22e05f8c5f/5f33be338fa5cb2e2e792483_P1030380.jpg" title="me"/>
            </div>

        </div>
    );
}

export default Header;
