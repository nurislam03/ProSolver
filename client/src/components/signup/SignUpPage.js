
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/SignUp.css';
import SignUpForm from './SignUpForm';
import { userSignupRequest } from '../../actions/signUpAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SignUpPage extends Component {

	render() {

		return(
			<div className="SignUp">
				<SignUpForm />
			</div>
		);
	}
};

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignUpPage);
