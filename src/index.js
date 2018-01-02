import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js'

class App extends React.Component {
	constructor(props){
        super(props);
        this.state = {stylePath: 'index-default.css'};
    }

	change(name) {
		this.setState({stylePath: name});
	}

	render() {
		return (<div className='App'>
			<Header />
			<div className="buttons">
				Theme:
				<link 
					rel="stylesheet" 
					type="text/css" 
					href={this.state.stylePath} 
				/>
				<button 
					onClick={()=> this.change('index-default.css')} 
					name="default"
				>default
				</button>
				<button 
					onClick={()=> this.change('index-dark.css')} 
					name="dark"
				>dark
				</button>
				<button 
					onClick={()=> this.change('index-light.css')} 
					name="light"
				>light
				</button>
			</div>
		</div>);
	}
}

ReactDOM.render(
	<App />, document.getElementById('root')
);