import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage(){
    
    const {userStore, modalStore} = useStore();
    return(
           <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                    <Image className='robot' src={`/assets/homepage2.png`} />
                    <h1>eventfriend</h1>
                    {userStore.isLoggedIn ? (
                        <>
                            <Button className='login'as={Link} to='/activities' size='huge'>
                                events
                            </Button>
                        </>
                    ) : (
                            <>
                                <Button className='login' onClick={() => modalStore.openModal(<LoginForm/>)} size='huge'>
                                    Login
                                </Button>
                                
                                <Button className='register' onClick={() => modalStore.openModal(<RegisterForm/>)} size='huge'>
                                    Register
                                </Button>
                            </>
                        )}
                </Container>
           </Segment>
    )
})