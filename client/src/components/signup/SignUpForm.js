import React, { Component } from 'react';
import '../../styles/SignUp.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../validation/signup';
import { Button } from 'reactstrap';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
			username: '',
	      	email: '',
	      	password: '',
	      	passwordConfirmation: '',
	      	errors: {},
	      	isLoading: false,
	      	invalid: false
        }
    }

	onChange = (e) => {
    	this.setState({ [e.target.name]: e.target.value });
  	}

  	isValid() {
    	const { errors, isValid } = validateInput(this.state);
	    if (!isValid) {
	     	this.setState({ errors });
	    }
		return isValid;
  	}
/*
	checkUserExists = (e) => {
    	const field = e.target.name;
    	const val = e.target.value;
	    if (val !== '') {
			this.props.isUserExists(val).then(res => {
  	        let errors = this.state.errors;
  	        let invalid;
  	        if (res.data.user) {
  	          errors[field] = 'There is user with such ' + field;
  	          invalid = true;
  	        }
			else {
  	          errors[field] = '';
  	          invalid = false;
  	        }
  	        this.setState({ errors, invalid });
  	      });
	    }
	}
*/

	onSubmit = (e) => {
    	e.preventDefault();

	    if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			this.props.userSignupRequest(this.state).then(
				() => {
  				this.props.addFlashMessage({
					type: 'success',
					text: 'You signed up successfully. Welcome!'
  				});
  				this.context.router.push('/');
  			  	},
  			  	(err) => this.setState({ errors: err.response.data, isLoading: false })
			);
	    }
  	 }


    render() {
		const { errors } = this.state;

	    return (
			<form onSubmit={this.onSubmit}>
				<br />
	  	        <h1>Join our community!</h1>

	  	        <TextFieldGroup
	  	          error={errors.username}
	  	          label="Username"
	  	          onChange={this.onChange}
	  	          //checkUserExists={this.checkUserExists}
	  	          value={this.state.username}
	  	          field="username"
	  	        />

	  	        <TextFieldGroup
	  	          error={errors.email}
	  	          label="Email"
	  	          onChange={this.onChange}
	  	          //checkUserExists={this.checkUserExists}
	  	          value={this.state.email}
	  	          field="email"
	  	        />

	  	        <TextFieldGroup
	  	          error={errors.password}
	  	          label="Password"
	  	          onChange={this.onChange}
	  	          value={this.state.password}
	  	          field="password"
	  	          type="password"
	  	        />

	  	        <TextFieldGroup
	  	          error={errors.passwordConfirmation}
	  	          label="Password Confirmation"
	  	          onChange={this.onChange}
	  	          value={this.state.passwordConfirmation}
	  	          field="passwordConfirmation"
	  	          type="password"
	  	        />

	  	        <div className="form-group">
	  	          	<Button disabled={this.state.isLoading || this.state.invalid} color="danger" size="lg" block >
	  	            	Sign up
	  				</Button>
	  			<br />
	  	        </div>
  	      </form>
	    );
	}
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignUpForm;
