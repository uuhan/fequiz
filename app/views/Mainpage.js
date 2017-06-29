import React, { Component } from 'react';

export default class Mainpage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('place holder');
    }

    render() {
        return (
            <div>
                placeholder
                { this.props.children }
            </div>
        )
    }
}
