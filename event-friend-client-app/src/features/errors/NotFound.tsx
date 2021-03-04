import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Header, Image, Segment } from 'semantic-ui-react';

export default function NotFound(){
    return(
        // <Segment placeholder className='lost'>
        //     <Image className='notFound' src={`/assets/abstract-page-not-found.png`} />
        //     <Header icon>
        //         Lost Page
        //     </Header>
        //     <Segment.Inline>
        //         <Button className='login' as={Link} to='/activities' primary>Events</Button>
        //     </Segment.Inline>
        // </Segment>
            <Card className='lost' style={{margin: 'auto'}}>
                <Image className='lostPic' fluid
                        src={`/assets/abstract-page-not-found.png`}/>
                <Card.Content className='lost'>
                    <Header icon style={{marginTop: '2em'}}>
                        Page Not Found
                    </Header>
                </Card.Content>
                <Segment basic textAlign={'center'} style={{marginTop: '-1em'}}>
                    <Button className='lostButton' as={Link} to='/activities' primary>Events</Button>
                </Segment>
            </Card>
       
    )
}