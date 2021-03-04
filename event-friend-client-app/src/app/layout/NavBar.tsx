import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Menu, Image, Dropdown } from 'semantic-ui-react';
import ActivityFilters from '../../features/activities/dashboard/ActivityFilters';
import modalStore from '../stores/modalStore';
import { useStore } from '../stores/store';
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";


export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore();
    const {userStore, modalStore} = useStore();
    return (
        <Menu fixed='top'>
            <Container>
                <Menu.Item className='navbarLogo' as={NavLink} exact to='/' header>
                    eventfriend
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text='Menu'>
                        <Dropdown.Menu className='mainDropdown'>
                            <Dropdown.Item as={NavLink} to='/activities' color='pink' content='Events' icon='heart'/>
                            <Dropdown.Item as={NavLink} to='/createActivity' color='pink' content='Create' icon='edit outline'/>
                            <Dropdown.Item content='Filters' onClick={() => modalStore.openModal(<ActivityFilters/>)} icon='filter'/>
                            <Dropdown.Item>
                                <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                                <Dropdown text={user?.displayName}>
                                    <Dropdown.Menu className='profileDropdown'>
                                        <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} 
                                            text='My Profile' icon='user' />
                                        <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})