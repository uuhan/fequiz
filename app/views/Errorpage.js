import React, { Component } from 'react';

export default class Errorpage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('error page');
    }

    render() {
        return (
            <div>
                error page
                { this.props.children }
            </div>
        )
    }
}
