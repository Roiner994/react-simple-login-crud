import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Spinner } from 'react-bootstrap';
import { SubmissionError } from 'redux-form';
import { fetchUsers, updatetUser } from '../../actions/user';
import {notification} from "./../../constants/notification";
import { getUsers, getUserById } from '../../selectors/users';
import UserForm from '../../components/UserForm';

class UserContainer extends Component {
    componentDidMount = () => {
        if(!this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if(!this.props.customers){
            this.props.fetchUsers();
        }
    }

    renderBody = () => {
        if (this.props.user){
            return <UserForm {...this.props.user}
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleBack}
            onSubmitFail = {this.handleOnSubmitFail}
            isEdit={true}
            />
        } 
        return <Spinner animation="border" variant="primary" />;
    };

    handleSubmit = values => {
        const { id } = values; 
        return this.props.updatetUser(id, values).then( r => {
        }).catch(e => {
            throw new SubmissionError(e);
        });
    }

    handleBack = () => {
        this.props.history.goBack();
    };

    handleOnSubmitSuccess = () => {
        notification( 'success', 'Usuario actializado correctamente' ).show();
        this.props.history.goBack();
    }

    handleOnSubmitFail = (e) => {
        notification( 'error', e ).show();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Card.Title>Editar Usuario</Card.Title>
                        {this.renderBody()}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

UserContainer.proTypes = {
    id: PropTypes.number.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    user: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
    auth: state.authentication,
    users : getUsers(state),
    user: getUserById(state,props)
})

export default withRouter(connect( mapStateToProps ,{ fetchUsers , updatetUser , notification }) (UserContainer));