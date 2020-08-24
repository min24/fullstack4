import React from 'react';

class Step extends React.Component {
	constructor(props) {
		super(props); // de goi len thg cha
		this.state = {
			msg: 'Bui Van Nguyen'
		}
	}
	changeName() {
		console.log('change name');
		this.setState({msg: 'nguyen van tung'});
	}

	render() {
		return (
			<div>
				<h1>step!</h1>
				<p> { this.state.msg } </p>
				<button onClick={ () => this.changeName() }>Tung</button>
			</div>
			);
	}
}

export default Step;