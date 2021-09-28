import { Avatar } from "@material-ui/core"
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sideBar">
           <div className=".sidebar__top" >
               <img src="" alt=""/>
               <Avatar />
               <h2>Liam Gosnell</h2>
               <h4>developer.liamg@gmail.com</h4>
           </div>
        </div>
    )
}

export default Sidebar
