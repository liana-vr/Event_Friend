import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import { Button, Card, Grid, Header, Tab } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import { Link } from 'react-router-dom';

export default observer(function ProfileFollowings(){
    const {profileStore} = useStore();
    const {profile, followings, loadingFollowings, activeTab} = profileStore;
    
    return(
        <Tab.Pane loading={loadingFollowings}>
            <Grid>
                <Grid.Column width={16}>
                    <Button content={activeTab === 3 ? `Following` : `Followers`}/>
                    <Button content={`Followers`}/>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Card.Group itemsPerRow={4}>
                        {followings.map(profile => (
                            <ProfileCard key={profile.username} profile={profile}/>
                        ))}
                    </Card.Group>
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})