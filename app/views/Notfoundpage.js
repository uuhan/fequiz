import React, { Component } from 'react';

export default class Notfoundpage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('error page');
    }

    render() {
        return (
            <div>
                404 - not found
            </div>
        )
    }
}
