import { Avatar } from "@material-ui/core"
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sideBar">
           <div className=".sidebar__top" >
               <img src="" alt=""/>
               <Avatar className="sidebar__avatar"/>
               <h2>Liam Gosnell</h2>
               <h4>developer.liamg@gmail.com</h4>
           </div>

           <div className=".sidebar__stats">
                <div className=".sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,562</p>
                    
                </div>
                <div className=".sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,446</p>
                </div>
           </div>

           <div className="sidebar__bottom">
                <p>Recent</p>
                
           </div>

        </div>
    )
}

export default Sidebar
