import React from 'react';
import { Grid, Header, Item, Segment, Statistic, Divider, Button, Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import FollowButton from './FollowButton';
import { useStore } from '../../app/stores/store';
import modalStore from '../../app/stores/modalStore';
import ActivityFilters from '../activities/dashboard/ActivityFilters';
import ProfileFollowings from './ProfileFollowings';
import profileStore from '../../app/stores/profileStore';


interface Props{
    profile: Profile;
}

export default observer(function ProfileHeader({profile}: Props){
    const {userStore, modalStore} = useStore();
    const {profileStore} = useStore();
    const { followings, loadingFollowings} = profileStore;
    return(
        <Segment className='profileHeader'>
            <Item.Group>
                <Item>
                    <Item.Image avatar size='small' src={profile.image || '/assets/user.png'}/>
                    <Item.Content verticalAlign='middle'>
                        <Header as='h1' content={profile.displayName}/>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Item.Group className='bigFollowButton' style={{width: '40%'}}>
                <FollowButton profile={profile}/>
            </Item.Group>
            {/* <Grid>
                <Grid.Column width={8}>
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size='small' src={profile.image || '/assets/user.png'}/>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content={profile.displayName}/>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column width={8} className='bigFollowButton'>
                    <FollowButton profile={profile} />
                </Grid.Column>
            </Grid> */}
        </Segment>
        
    )
})