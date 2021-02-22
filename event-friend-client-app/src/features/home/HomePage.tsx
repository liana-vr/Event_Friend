import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';

export default function HomePage(){
    return(
           <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                    <Header as='h1' inverted>
                        <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBotom: 12}}/>
                        Eventfriend
                    </Header>
                    <Header as='h2' inverted content='Welcome Friend!'/>
                    <Button as={Link} to='/activities' size='huge' inverted>
                        Show Me Events!
                    </Button>
                </Container>
           </Segment>
    )
}