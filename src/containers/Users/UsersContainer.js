import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers , deleteUser } from '../../actions/user';
import { getUsers } from '../../selectors/users';
import AppFrame from '../../components/AppFrame';
import TableComponent from '../../components/TableComponent';
import ModalDelete from '../../components/ModalDelete';
import {notification} from '../../constants/notification';

class UsersContainer extends Component {

    constructor(props, context) {
        super(props, context);  
        this.state = {
          id: '',
        };
    }
    
    componentDidMount = () => {
        if(!this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if(!this.props.customers){
            this.props.fetchUsers();
        }
    }

    renderBody = (users,attributes,tableHeader) => (
        <TableComponent 
            listObject={users} 
            urlPath={'users/'} 
            attributes={attributes} 
            tableHeader={tableHeader}
            isActions={true}
            showModal={this.handleShowModal}/>
    );

    handleShowModal = (e, id) => {
        e.preventDefault();
        this.setState({ id })
        this.refs.modal.show();
    };

    handleDelete = (e, id) => {
        e.preventDefault();
        console.log('me estoy eliminando');
        this.props.deleteUser(id).then(r =>{
            this.refs.modal.hide();
            notification('success','Usuario eliminado de manera correcta').show();
        }).catch( e =>{
            this.refs.modal.hide();
            notification('error', e).show();
        });
    }

    render() {
        const attributes = ['id','name', 'email'];
        const tableHeader = ['ID','Nombre','Correo']
        
        return (
            <div>
                <AppFrame 
                    header='Lista de usuarios'
                    urlButton='users/new'
                    contentButton='Nuevo Usuario'
                    body={this.renderBody(this.props.users,attributes,tableHeader)}>
                </AppFrame>

                <ModalDelete 
                    ref="modal" 
                    id={this.state.id} 
                    onDelete={this.handleDelete}>
                </ModalDelete>
            </div>
        );
    }
}

UsersContainer.defaultProps = {
    users : []
};

const mapStateToProps = state => ({
    auth: state.authentication,
    users : getUsers(state)
})

export default withRouter(connect( mapStateToProps ,{ fetchUsers , deleteUser }) (UsersContainer));