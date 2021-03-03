import React from 'react';
import { observer } from 'mobx-react-lite';
import { List, Image, Popup, Label } from 'semantic-ui-react';
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';
import ProfileCard from '../../profiles/ProfileCard';

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({attendees}: Props){
    const styles = {
        borderColor: '#ff68f7',
        borderWidth: 2,
        // boxShadow:  '5px 5px 6px 0 #ffaefb',
    }
    return(
        <List horizontal>
            {attendees.map(attendee => (
                <Popup hoverable key={attendee.username}
                    trigger={
                        <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
                            <Image size='mini' circular src={attendee.image || '/assets/user.png'}
                                bordered style={attendee.following ? styles : null}/>
                        </List.Item>
                    }>
                    <Popup.Content>
                        <p>{attendee.displayName}</p>
                        {/* <ProfileCard profile={attendee}/> */}
                    </Popup.Content>
                </Popup>
            ))}
        </List>
    )
})