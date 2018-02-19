
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/SignUp.css';
import SignUpForm from './SignUpForm';
import { userSignupRequest } from '../../actions/signUpAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';


class SignUpPage extends Component {

	render() {
		const { userSignupRequest } = this.props;

		return(
			<div className="SignUpBody">
				<br /> <br />
				<Row>
					<Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
						<Container className="onlyForm">
							<div>
								<SignUpForm
									//isUserExists={isUserExists}
									userSignupRequest={userSignupRequest}
								/>
							</div>
						</Container>
					</Col>
				</Row>
				<br />
			</div>
		);
	}
};

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignUpPage);
