import React from 'react';

export default class Header extends React.Component {
	constructor(props){
        super(props);
        this.state = {stylePath: 'index-default.css'};
    }

    render() {
    	return <header className="Header">head</header>;
    }
}