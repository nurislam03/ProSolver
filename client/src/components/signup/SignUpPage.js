
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/SignUp.css';


function Input (props)  {
	return (
		<div className="Input">
			<input id={this.props.name} autocomplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
			<label for={this.props.name}></label>
		</div>
	);
};



function Modal (props) {
	return (
		<div className="Modal">
			<form  className="ModalForm">
				<Input id="name" type="text" placeholder="Nur-Islam" />
				<Input id="username" type="email" placeholder="example@gmail.com" />
				<Input id="password" type="password" placeholder="password" />
				<button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
			</form>
		</div>
	);
};

//onSubmit={this.props.onSubmit}

class SignUpPage extends Component{

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
/*		const child = this.state.childf; // not sure what i have done here!!!
		if(this.state.mounted) {
			//child = (<Modal onSubmit={this.handleSubmit} />);
			child : !this.state.child;
		}
*/
		const child = (<Modal onSubmit={this.handleSubmit} />);
		return(
			<div className="SignUp">
				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
};

export default SignUpPage;
