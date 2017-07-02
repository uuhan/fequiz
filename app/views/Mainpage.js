import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

import { connect }          from 'react-redux';

import Block                from './Block';
import EditModal            from './EditModal';

/**
 * Mainpage: main page, connect to redux store
 *
 * @export
 * @class Mainpage
 * @extends {Component}
 */
@connect((state) => {
    return {
        items: state.items
    };
})
export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /** @type {boolean} new article modal */
            newModalVisible: false
        };
    }

    render() {
        return (
            <Row style={{ marginTop: '60px', backgroundColor: '#f2f2f2' }}>
                <Col span={2}/>
                <Col span={14}>
                    {/* List Blocks Here */}
                    { this.props.items.map((v, k) => {
                        return (
                            <Block {...v} key={k} index={k}></Block>
                        );
                    })}
                </Col>
                <Col span={2}/>
                <Col span={4}>
                    <Button
                        type='primary'
                        size='large'
                        style={{
                            width: '100%',
                            backgroundColor: '#5fb485'
                        }}
                        onClick={() => {
                            this.setState({
                                newModalVisible: true
                            });
                        }}
                    >+ Add New</Button>
                    <EditModal head='Add Article' visible={this.state.newModalVisible} cb={() => {}}/>
                </Col>
                <Col span={2}/>
            </Row>
        );
    }
}
