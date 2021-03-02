import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image, Label} from 'semantic-ui-react'
import {Activity} from "../../../app/models/activity";
import { format } from 'date-fns';
import { useStore } from '../../../app/stores/store';


const activityImageStyle = {
    filter: 'brightness(100%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    top: '-3.5%',
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
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                {activity.isCancelled &&
                    <Label style={{position: 'absolute', zIndex: 1000, left: -14, top: 20}} 
                        ribbon color='pink' content='Cancelled'/>
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
                        <Button color={activity.isCancelled ? 'blue' : 'pink'} floated='left' basic 
                            content={activity.isCancelled ? 'Re-activate Event' : 'Cancel Event'} onClick={cancelActivityToggle} loading={loading}/>
                        <Button as={Link} disabled={activity.isCancelled} to={`/manage/${activity.id}`} color='violet' floated='right'>
                            Manage Event
                        </Button>
                    </>
                ) : activity.isGoing ? (
                    <Button loading={loading} color='pink' onClick={updateAttendance}>Cancel attendance</Button>
                ) : (
                    <Button loading={loading} disabled={activity.isCancelled} onClick={updateAttendance} color='purple'>Join Event</Button>
                )}
            </Segment>
        </Segment.Group>
    )
})