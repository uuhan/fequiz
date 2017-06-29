import React, { Component } from 'react';

export default class Notfoundpage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('404 - not found');
    }

    render() {
        return (
            <div>
                404 - not found
            </div>
        )
    }
}
