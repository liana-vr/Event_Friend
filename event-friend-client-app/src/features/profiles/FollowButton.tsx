import React, { SyntheticEvent } from 'react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Reveal, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

interface Props {
    profile: Profile;
}

export default observer(function FollowButton({profile}: Props) {
    const {profileStore, userStore} = useStore();
    const {updateFollowing, loading} = profileStore;

    if (userStore.user?.username === profile.username) return null;

    function handleFollow(e: SyntheticEvent, username: string){
        e.preventDefault();
        profile.following ? updateFollowing(username, false) : updateFollowing(username, true);
    }

    return(
        <Reveal animated='move' className='bigFollowButton'>
            <Reveal.Content className='bigFollowButton' visible style={{width: '100%'}}>
                <Button fluid color='purple' className='followButton' content={profile.following ? 'Following' : 'Not Following'}/>
            </Reveal.Content>
            <Reveal.Content className='bigFollowButton' hidden style={{width: '100%'}}>
                <Button fluid basic className='followButton'
                    color={profile.following ? 'pink' : 'purple'} 
                    content={profile.following ? 'Unfollow' : 'Follow'}
                    loading={loading} onClick={(e) => handleFollow(e, profile.username)}/>
            </Reveal.Content>
        </Reveal>
    )
}) 