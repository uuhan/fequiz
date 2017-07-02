import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

import Block                from './Block';

export default class Mainpage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Row style={{marginTop: '60px', backgroundColor: '#f2f2f2'}}>
                <Col span={2}/>
                <Col span={14}>
                    {/* List Blocks Here */}
                    <Block
                        url='http://placekitten.com/g/1600/900'
                        title='Europe Street beat'
                        content={
                            'Dolor proident quis cillum anim ea officia anim ex culpa minim occaecat et.' +
                            ' Irure laborum dolore consequat voluptate nulla magna Lorem ad.' +
                            ' Ex sunt enim officia id consequat occaecat. Aute tempor in laboris dolore' +
                            ' mollit in id culpa culpa amet veniam pariatur nisi. Esse reprehenderit' +
                            ' ut amet et minim eiusmod officia eu. Deserunt Lorem ea eiusmod esse.' +
                            ' Et quis est consectetur Lorem ad tempor duis quis voluptate aliqua occaecat ipsum.'}
                    />
                </Col>
                <Col span={2}/>
                <Col span={4}>
                    <Button
                        type='primary'
                        size='large'
                        style={{
                            width: '100%',
                            backgroundColor: '#5fb485'
                        }}>+ Add New</Button>
                </Col>
                <Col span={2}/>
            </Row>
        )
    }
}
