import React from 'react';
import NavbarMenu from '../components/NavbarMenu';

class Muvik extends React.Component {
  render() {
    return (
      <div className="row">
        <NavbarMenu />
        <div className="col-sm-9 col-md-10 col-xs-12 main-view">
          <div className="">My Muvik</div>
        </div>
        
      </div>
    );
  }
}

export default Muvik;