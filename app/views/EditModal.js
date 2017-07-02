import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import { Modal }                from 'antd';

import { verticalCenterModal }  from './EditModal.css';

/**
 * EditModal: modal for editing & adding new article
 *
 * @export
 * @class EditModal
 * @extends {Component}
 */
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    static propTypes = {
        /** @type {string} the modal visible control    */
        visible: PropTypes.bool.isRequired,
        /** @type {string} the modal header             */
        head: PropTypes.string.isRequired,
        /** @type {string} the image url                */
        url: PropTypes.string,
        /** @type {string} the title of an article      */
        title: PropTypes.string,
        /** @type {string} the content of an article    */
        content: PropTypes.string,
        /** @type {function}                            */
        cb: PropTypes.func.isRequired
    }

    okClick(modalVisible) {
        this.setState({ modalVisible }, () => {
            // callback function
            this.props.cb();
        });
    }

    cancelClick(modalVisible) {
        this.setState({ modalVisible }, () => {
            // TODO some cleanup
        });
    }

    componentWillReceiveProps(ntProps) {
        const { visible } = ntProps;
        this.setState({
            modalVisible: visible
        });
    }

    render() {
        return (
            <Modal
                title={ this.props.head }
                wrapClassName={verticalCenterModal}
                visible={this.state.modalVisible}
                onOk={() => this.okClick.bind(this)(false)}
                onCancel={() => this.cancelClick.bind(this)(false)}
            >
                <p>{this.props.url}</p>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
            </Modal>
        );
    }
}
