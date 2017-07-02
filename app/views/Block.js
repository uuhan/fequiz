import React, { Component } from 'react';
import { Card, Button }     from 'antd';
import PropTypes            from 'prop-types';

/** use local stylesheet */
import { hoverBtn }         from './Block.css';

/**
 * Block: A Block for showing an article
 *
 * @export
 * @class Block
 * @extends {Component}
 */
export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /** @type {boolean} check if mouse hovered */
            hovered: true
        };
    }

    static propTypes = {
        /** @type {string} the image url */
        url: PropTypes.string.isRequired,
        /** @type {string} the title of an article */
        title: PropTypes.string.isRequired,
        /** @type {string} the content of an article */
        content: PropTypes.string.isRequired
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{ padding: 0, position: 'relative', textAlign: 'left' }}>
                <Button size='large' type='primary' className={hoverBtn}>
                    Edit
                </Button>
                <div style={{ padding: '20px', backgroundColor: 'white' }}>
                    <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }} bordered={false}>
                        <div className="custom-image">
                            <img alt="" width="100%" src={this.props.url} />
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
