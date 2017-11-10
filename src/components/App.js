import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom'
import { history } from './../store/configureStore';
import { connect } from 'react-redux';

    import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites';
import Muvik from '../containers/Muvik';
import Tinmoi from '../containers/Tinmoi';

const PrivateRoute = ({component: Component, authorize, authenticated, ...props}) => {
    return (
        <Route
            {...props}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
        />
    );
};

const PublicRoute = ({component: Component, authorize, authenticated, ...props}) => {
    switch (authorize) {
        case 2:
            return (
                <Route
                    {...props}
                    render={(props) => authenticated === false
                        ? <Component {...props} />
                        : <Redirect to='/muvik' />}
                />
            );
        case 3:
            return (
                <Route
                    {...props}
                    render={(props) => authenticated === false
                        ? <Component {...props} />
                        : <Redirect to='/tinmoi' />}
                />
            );
        default:
            return (
                <Route
                    {...props}
                    render={(props) => authenticated === false
                        ? <Component {...props} />
                        : <Redirect to='/tinmoi' />}
                />
            );
    }
};

class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Header/>
                    
                    <div className="container container-no-padding container-no-margin main">
                        <Route exact path="/" component={ Home }></Route>
                        <PublicRoute  authenticated={this.props.authenticated } authorize={this.props.authorize } path="/signup" component={ Signup } />
                        <PublicRoute  authenticated={this.props.authenticated } authorize={this.props.authorize } path="/login" component={ Login } />
                        <PrivateRoute  authenticated={this.props.authenticated } authorize={this.props.authorize } path="/favorites" component={ Favorites } />

                        {/*Muvik routes*/}
                        <PrivateRoute authenticated={this.props.authenticated } authorize={this.props.authorize } path="/muvik" component={ Muvik } />

                        {/*Tin moi routes*/}
                        <PrivateRoute authenticated={this.props.authenticated } authorize={this.props.authorize } path="/tinmoi" component={ Tinmoi } />
                        <Route path="/error" component={ Home }></Route>
                    </div>

                    {/*<Footer/>*/}
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        authenticated: state.auth.authenticated,
        authorize: state.auth.authorize 
    };
};

export default connect(mapStateToProps)(App);