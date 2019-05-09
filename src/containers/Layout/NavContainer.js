import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from './../../actions/authentication';
import {notification} from './../../constants/notification';
// import PropTypes from 'prop-types';

class NavContainer extends Component {

    onLogout = (e) => {
        e.preventDefault();
        this.props.authUser({});
        notification( 'warning', 'Hasta luego' ).show();
        this.props.history.push('/');
    }
    

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = () => (
            <Nav>
                <Nav.Link>{user.data.name}</Nav.Link>
                <Nav.Link onClick={this.onLogout.bind(this)} >Logout</Nav.Link>
            </Nav>
        );
        
        const guestLinks = () => (
            <Nav>
                <LinkContainer to="/users/new">
                    <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            </Nav>
        );

        return (
            <Navbar collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/">CRUD</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {isAuthenticated ? authLinks() : guestLinks()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// NavContainer.propTypes = {

// };

const mapStateToProps = (state) => ({
    auth: state.authentication
})

export default connect(mapStateToProps, { authUser })(withRouter(NavContainer));