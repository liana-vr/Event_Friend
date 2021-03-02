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
            <Grid>
                <Grid.Column width={8}>
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size='small' src={profile.image || '/assets/user_02.png'}/>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content={profile.displayName}/>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Statistic.Group widths={2}>
                        <Button onClick={() => modalStore.openModal(<ProfileFollowings />)}>
                            <Statistic label='Followers' value={profile.followersCount}/></Button>
                        <Button><Statistic label='Following' value={profile.followingCount}/></Button>
                    </Statistic.Group>
                    <FollowButton profile={profile}/>
                </Grid.Column>
            </Grid>
        </Segment>
    )
})