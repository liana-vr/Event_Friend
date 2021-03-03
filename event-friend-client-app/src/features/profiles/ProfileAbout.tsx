import React, {useState} from 'react';
import {useStore} from "../../app/stores/store";
import {Button, Grid, Header, Label, Tab} from "semantic-ui-react";
import { observer } from 'mobx-react-lite';
import ProfileEditForm from './ProfileEditForm';

export default observer(function ProfileAbout() {
    const {profileStore} = useStore();
    const {isCurrentUser, profile} = profileStore;
    const [editMode, setEditMode] = useState(false);

    return (
        <Tab.Pane className='profileHeader'>
            <Grid>
                <Grid.Column width='16'>
                   <Label className='profileLabels' basic color='purple'>{`About ${profile?.displayName}`}</Label>
                    {isCurrentUser && (
                        <Button color='purple' className='AddPhoto'
                            floated='right'
                            content={editMode ? 'Cancel' : 'Edit Profile'}
                            onClick={() => setEditMode(!editMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width='16'>
                    {editMode ? <ProfileEditForm setEditMode={setEditMode} /> : <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>}

                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})