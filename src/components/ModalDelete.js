import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ModalDelete extends Component {
    constructor(props, context) {
        super(props, context);  
        this.state = {
          smShow: false,
        };
    }

    show = () => this.setState({ smShow: true });

    hide = () => this.setState({ smShow: false });

    render() {
        const {onDelete , id} = this.props;
        let smClose = () => this.setState({ smShow: false });
        return (
            <Modal
            size="sm"
            show={this.state.smShow}
            onHide={this.hide}
            aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        ¿Desea eliminar este elemento?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={smClose}>Cancelar</Button>
                    <Button variant="primary" onClick={(e) => onDelete(e,id)}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalDelete.propTypes = {
    onDelete: PropTypes.func,
};

export default ModalDelete;