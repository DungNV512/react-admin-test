import React from 'react';
import { connect } from 'react-redux';

class NavMenu extends React.Component {
    render(){
        return(
            <div className="col-sm-3 col-md-2 sidebar">
                <div className="sidebar-top">
                    <ul>
                        <li><a onClick={() => history.push('page1') }>Page 1</a></li>
                        <li><a onClick={() => history.push('page2') }>Page 2</a></li>
                    </ul>
                </div>
                <div className="sidebar-bottom">Designed by Di Envy</div>
            </div>
            
        );
    }
}

export default NavMenu;