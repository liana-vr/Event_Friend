import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import FollowButton from './FollowButton';

interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({profile}: Props) {
    function truncate(str: string | undefined) {
        if (str) {
            return str.length > 40 ? str.substring(0, 37) + '...' : str;
        }
    }

    return (
        <Card className='attendeeCard' as={Link} to={`/profiles/${profile.username}`}>
            <Image style={{maxHeight: '5em', margin: 'auto', textAlign: 'center', borderRadius: '50%'}} 
                    src={profile.image || '/assets/user.png'} className='profileCardPhoto'/>
            <Card.Content>
                <Card.Header style={{textAlign: 'center'}}>{profile.displayName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />Followers: {profile.followersCount}
            </Card.Content>
            <FollowButton profile={profile}/>
        </Card>
    )
})