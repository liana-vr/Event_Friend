import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Icon, Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfileAbout from './ProfileAbout';
import ProfileActivities from './ProfileActivities';
import ProfileFollowings from './ProfileFollowings';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();

    const panes = [
        {menuItem: <Icon name='info' size='large' color='black' className='profileTabs' 
            style={{cursor: 'pointer'}}/>, render: () => <ProfileAbout />},
        {menuItem: <Icon name='camera' size='large' color='black' className='profileTabs' 
            style={{cursor: 'pointer'}}/>, render: () => <ProfilePhotos profile={profile} />},
        {menuItem: <Icon name='calendar' size='large' color='black' className='profileTabs' 
            style={{cursor: 'pointer'}}/>, render: () => <ProfileActivities/>},
        {menuItem: <Icon name='users' size='large' color='black' className='profileTabs' 
            style={{cursor: 'pointer'}}/>, render: () => <ProfileFollowings/>},
        {menuItem: <Icon name='user' size='large' color='black' className='profileTabs' 
            style={{cursor: 'pointer'}}/>, render: () => <ProfileFollowings/>},
    ];

    return (
        <Tab className='profileMenu'
            menu={{fluid: true, vertical: false}}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
})
