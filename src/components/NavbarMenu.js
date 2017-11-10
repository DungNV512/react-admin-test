import React from 'react';

class NavbarMenu extends React.Component {
    render(){
        return(
            <div className="col-sm-3 col-md-2 sidebar">
                <div className="sidebar-top">
                    <ul>
                        <li><a>Overview</a></li>
                        <li><a>Activity</a></li>
                        <li><a>Audience</a></li>
                        <li><a>Behavior</a></li>
                    </ul>
                </div>
                <div className="sidebar-bottom">
                    <ul>
                        <li><a>Setting</a></li>
                        <li><a>Admin</a></li>
                        <li><a>Designed by Di Envy</a></li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default NavbarMenu;