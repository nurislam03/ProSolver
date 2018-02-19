import React, { Component } from 'react';
import '../../styles/SignUp.css';
import PropTypes from 'prop-types';
//import classnames from 'classnames';
//import TextFieldGroup from '../common/TextFieldGroup';

function Input (props)  {

	return (
		<div className="Input" onSubmit={props.onSubmit}>
			<input id={props.name} autocomplete="false" required type={props.type} placeholder={props.placeholder} />
			<label for={props.name}></label>
		</div>
	);
};


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getInitialState = () => {
        return { mounted: false };
    }

    componentDidMount = () => {
        this.setState({ mounted: true });
    }

    handleSubmit = (e) => {
        this.setState({ mounted: false });
        e.preventDefault();
    }

    render() {

        return (
    		<div className="SignUp">
    			<form  className="ModalForm">
    				<Input id="name" type="text" placeholder="name" />
    				<Input id="username" type="email" placeholder="example@gmail.com" />
    				<Input id="password" type="password" placeholder="password" />
    				<button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
    			</form>
    		</div>
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
