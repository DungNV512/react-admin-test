import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import NavbarMenu from '../components/NavbarMenu';
import Ages from '../components/Ages';
import Gender from '../components/Gender';
import GeoMap from '../components/GeoMap';
import Location from '../components/Location';

class Tinmoi extends React.Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <div className="col-sm-9 col-md-10 main-view">
          <div className="tin-moi">
            <button onClick={this.props.actions.requestAges}>Click to ages</button>
            <Ages ages={this.props.ages} />
            <button onClick={this.props.actions.requestGender}>Click to gender</button>
            <Gender gender={this.props.gender} />
            <button onClick={this.props.actions.requestGeomap}>Click to geomap</button>
            <GeoMap geomap={this.props.geomap} />
            <button onClick={this.props.actions.requestLocationByCity}>Click to location</button>
            <Location location={this.props.location} />
          </div>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ages: state.ages.data,
    gender: state.gender.data,
    geomap: state.geomap.data,
    location: state.location.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

//export default Tinmoi;
export default connect(mapStateToProps, mapDispatchToProps)(Tinmoi);