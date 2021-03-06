import React from 'react'
import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../../app/models/activity'

interface Props{
    activity: Activity;
}

export default observer(function ActivityDetailedSidebar ({activity: {attendees, host}}: Props) {
    if (!attendees) return null;
    return (
        <>
            <Segment className='peopleAttending'
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='purple'
            >
                {attendees.length} {attendees.length === 1 ? 'Person' : 'People'} Attending
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees.map(attendee => (
                        <Item style={{ position: 'relative' }} key={attendee.username}>
                            {attendee.username === host?.username &&
                                <Label
                                    style={{ position: 'absolute' }}
                                    color='pink'
                                    ribbon='right'
                                >
                                    Host
                                </Label>}
                            <Image size='tiny' circular src={attendee.image || '/assets/user.png'} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3' className='attendeeListName'>
                                    <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                </Item.Header>
                                {attendee.following &&
                                <Item.Extra style={{ color: '#ff68f7' }}>Following</Item.Extra>}
                            </Item.Content>
                        </Item>
                    ))}

                </List>
            </Segment>
            <Segment className='bottomSegment' attached='bottom'></Segment>
        </>

    )
})
