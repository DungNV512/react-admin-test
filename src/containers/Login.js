import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';

var data = require('../constants/user.json');
var md5 = require('js-md5');

const validate = values => {

  const errors = {};
  const isExistEmail = (element) => {return element.email === values.email;}
  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  } else if (!data.find(isExistEmail)){
    errors.email = "Email does not exist.";
  }
 
  if (!values.password) {
    errors.password = "Please enter a password.";
  }else if(!(data.find(isExistEmail) && md5(values.password) === data.find(isExistEmail).password)){
    errors.password = "Wrong password.";
  }

  return errors;
};

  class Login extends React.Component {
    
  handleFormSubmit = (values) => {
    for (var i = 0; i < data.length; i++) {
      var element = data[i];
      if (values.email === element.email) {
        values.privilege = element.privilege;
      } 
    }

    this.props.signInUser(values);
  };
  
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  render() {
    return(
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Log In</h2>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="email" component={this.renderField} className="form-control" type="text" label="Email"/>
            <Field name="password" component={this.renderField} className="form-control" type="password" label="Password"/>

            <button action="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, Actions)(reduxForm({
  form: 'login',
  validate
})(Login));