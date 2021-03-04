import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { format } from 'date-fns';
import { Activity } from '../../../app/models/activity';
import ActivityListItemAttendee from './ActivityListItemAttendee';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props){
    
    return(
        <Segment.Group className='activityCard'>
            <Segment >
                {activity.isCancelled &&
                    <Label attached='top' color='pink' content='Cancelled' style={{textAlign: 'center'}}/>
                }
                <Item.Group>
                    <Item>
                        <Item.Image className='activityCardPic' style={{marginBottom: 3}} size='small' circular src={`/assets/categoryImages/${activity.category}.png`}/>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
                            <Item.Description className='activityHost'>Hosted By <Link to={`/profiles/${activity.hostUsername}`}>{activity.host?.displayName}</Link></Item.Description>
                            {activity.isHost && (
                                <Item.Description>
                                    <Label className='hostLabel' basic color='pink'>You Are The Host</Label>
                                </Item.Description>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <Item.Description>
                                    <Label className='attendLabel' basic color='violet'>You Are Attending</Label>
                                </Item.Description>
                            )}
                            
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment >
                <span>
                    <Icon name='clock'/> {format(activity.date!, 'dd MMM yyyy h:mm aa')}{' '}{' '}
                    <Icon name='marker'/> {activity.venue}{' '}{' '}
                    <Icon name='tag'/> {activity.category}{' '}{' '}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!}/>
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button className='viewButton' as={Link} to={`activities/${activity.id}`} color='violet' floated='right' content='View'/> 
            </Segment>
        </Segment.Group>
    )
}