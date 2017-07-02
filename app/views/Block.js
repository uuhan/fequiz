import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { Card, Button }         from 'antd';
import PropTypes                from 'prop-types';

import { patchItem, addItem }   from '../actions';

/** use local stylesheet */
import {
    hoverBtn,
    fixedRatio,
    blockShadow
}                               from './Block.css';

import EditModal                from './EditModal';

/**
 * Block: A Block for showing an article
 *
 * @export
 * @class Block
 * @extends {Component}
 */
@connect(({ items }) => {
    return { items };
})
export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /** @type {boolean} check if mouse hovered */
            hovered: true,
            /** @type {boolean} modal visible */
            visible: false,
        };
    }

    static propTypes = {
        /** @type {string} the image url */
        url: PropTypes.string.isRequired,
        /** @type {string} the title of an article */
        title: PropTypes.string.isRequired,
        /** @type {string} the content of an article */
        content: PropTypes.string.isRequired,
        /** @type {number} index in stored array */
        index: PropTypes.number
    }

    render() {
        const { dispatch, index } = this.props;
        return (
            <div style={{
                padding: 0,
                position: 'relative',
                textAlign: 'left',
                marginBottom: '30px',
            }} className={blockShadow}
            >
                <Button size='large' type='primary' className={hoverBtn}
                    onClick={() => {
                        this.setState({
                            visible: true
                        });
                    }}
                >
                    Edit
                </Button>
                <EditModal head='Edit Article' visible={this.state.visible}
                    cb={(obj) => {
                        if (obj !== null) {
                            dispatch(patchItem(index, obj));
                        }
                        this.setState({
                            visible: false
                        });
                    }}
                    url={this.props.url}
                    title={this.props.title}
                    content={this.props.content}
                />
                <div style={{ padding: '20px', backgroundColor: 'white' }}>
                    <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }} bordered={false}>
                        <div className={ fixedRatio } style={{
                            position: 'relative',
                            background: `url(${this.props.url}) top center no-repeat`,
                            backgroundSize: 'contain'
                        }}>
                        </div>
                        <div className="custom-card">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.content}</p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}
