import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';

class Header extends React.Component {
  handleSignout() {
    this.props.signOutUser();
  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      switch (this.props.authorize) {
        case 2:
          return [
            <li className="nav-item" key={1}>
              <Link className="nav-link" to="/muvik">Muvik</Link>
            </li>,
            <li className="nav-item" key={2}>
              <a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>
            </li>
          ]
        case 3:
          return [
            <li className="nav-item" key={1}>
              <Link className="nav-link" to="/tinmoi">Tin mới</Link>
            </li>,
            <li className="nav-item" key={2}>
              <a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>
            </li>
          ]
        default:
          return [
            <li className="nav-item" key={1}>
              {/*<select value={this.state.value} onChange={this.handleChange}>*/}
              {/*<select>
                <option value="favorites"><Link className="nav-link" to="/favorites">Favorites</Link></option>
                <option value="muvik"><Link className="nav-link" to="/muvik">Muvik</Link></option>
                <option value="tinmoi"><Link className="nav-link" to="/tinmoi">Tin mới</Link></option>
              </select>*/}
              <Link className="nav-link" to="/muvik">Muvik</Link>
              <Link className="nav-link" to="/tinmoi">Tin mới</Link>
            </li>,
            <li className="nav-item" key={2}>
              <a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>
            </li>
          ]
      }
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">React2Gifs</Link>
          </div>
           <ul className="nav navbar-nav navbar-right">
             { this.renderAuthLinks() }
           </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    authorize: state.auth.authorize 
  }
}

export default connect(mapStateToProps, Actions)(Header);