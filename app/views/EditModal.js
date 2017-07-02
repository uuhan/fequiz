import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import {
    Modal,
    Form,
    Input
}                               from 'antd';

import { verticalCenterModal }  from './EditModal.css';

const FormItem = Form.Item;

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
            this.props.cb();
        });
    }

    handleInputChange() {
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
                closable={false}
                maskClosable={true}
                okText='Save'
                cancelText='Cancel'
                wrapClassName={verticalCenterModal}
                visible={this.state.modalVisible}
                onOk={() => this.okClick.bind(this)(false)}
                onCancel={() => this.cancelClick.bind(this)(false)}
            >
                <h2 style={{ marginBottom: '10px' }}>{this.props.head}</h2>
                <Form>
                    <FormItem label='Image'></FormItem>
                    <FormItem>
                        <Input
                            type='text'
                            value={this.props.url}
                        ></Input>
                    </FormItem>
                    <FormItem label='Title'></FormItem>
                    <FormItem>
                        <Input
                            type='text'
                            value={this.props.title}
                        ></Input>
                    </FormItem>
                    <FormItem label='Content'></FormItem>
                    <FormItem>
                        <Input
                            type='textarea'
                            autosize={{ minRows: 4, maxRows: 10 }}
                            value={this.props.content}
                        ></Input>
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}
