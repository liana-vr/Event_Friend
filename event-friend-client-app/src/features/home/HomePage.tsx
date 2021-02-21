import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default function HomePage(){
    return(
        <Container style={{marginTop: '7em'}}>
            <h1>
                Home Page My Friend ❤️
            </h1>
            <h3>
                Show Me My <Link to='/activities'>Events</Link>
            </h3>
        </Container>
    )
}