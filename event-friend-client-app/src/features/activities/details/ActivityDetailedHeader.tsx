import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image, Label} from 'semantic-ui-react'
import {Activity} from "../../../app/models/activity";
import { format } from 'date-fns';
import { useStore } from '../../../app/stores/store';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';


const activityImageStyle = {
    filter: 'brightness(100%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '50%',
    height: 'auto',
    color: 'black',
    background: 'white',
};

interface Props {
    activity: Activity
}

export default observer (function ActivityDetailedHeader({activity}: Props) {
    const {activityStore: {updateAttendance, loading, cancelActivityToggle}} = useStore();
    const {userStore, modalStore} = useStore();
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                {activity.isCancelled &&
                    <Label style={{position: 'absolute', zIndex: 1000, left: -14, top: 20}} 
                        ribbon color='pink' content='Cancelled' className='canceledEventFlag'/>
                }
                <Image src={`/assets/categoryImages/${activity.category}.png`} fluid style={activityImageStyle}/>
                <Segment className='activityName' style={activityImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={activity.title}
                                    style={{color: 'black'}}
                                />
                                <p>{format(activity.date!, 'dd MMM yyyy')}</p>
                                <p>
                                    Hosted by <strong><Link to={`/profiles/${activity.host?.username}`}>{activity.host?.displayName}</Link></strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                {activity.isHost ? (
                    <>
                        <Button color={activity.isCancelled ? 'blue' : 'pink'} basic floated='left' className='cancelEventButton' 
                            content={activity.isCancelled ? 'Re-activate' : 'Cancel'} onClick={cancelActivityToggle} loading={loading}/>
                        <Button as={Link} disabled={activity.isCancelled} to={`/manage/${activity.id}`} color='violet' floated='right'>
                            Manage Event
                        </Button>
                    </>
                ) : activity.isGoing ? (
                    <Button loading={loading} color='pink' onClick={updateAttendance}>Cancel</Button>
                ) : (
                    <Button loading={loading} disabled={activity.isCancelled} onClick={updateAttendance} color='purple'>Join</Button>
                )}
                <Button className='viewAttendees' loading={loading} color='blue' onClick={() => modalStore.openModal(<ActivityDetailedSidebar activity={activity}/>)}>Attendees</Button>
            </Segment>
        </Segment.Group>
    )
})