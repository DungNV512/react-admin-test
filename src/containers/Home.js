import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import Ages from '../components/Ages';
import Gender from '../components/Gender';
import GeoMap from '../components/GeoMap';

import '../styles/app.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        {/* <button onClick={this.props.actions.requestAges}>Click to ages</button>
        <Ages ages={this.props.ages} />
        <button onClick={this.props.actions.requestGender}>Click to gender</button>
        <Gender gender={this.props.gender} />
        <button onClick={this.props.actions.requestGeomap}>Click to geomap</button>
        <Gactions: bindActionCreators(Actions, dispatch)eoMap geomap={this.props.geomap} /> */}
        <GifList gifs={this.props.gifs} onGifSelect={selectedGif => this.props.actions.openModal({ selectedGif })} />
        <GifModal modalIsOpen={this.props.modalIsOpen}
          selectedGif={this.props.selectedGif}
          onRequestClose={() => this.props.actions.closeModal()} />
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    ages: state.ages.data,
    gender: state.gender.data,
    geomap: state.geomap.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);