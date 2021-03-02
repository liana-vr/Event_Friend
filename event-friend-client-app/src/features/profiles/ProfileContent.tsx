import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Tab } from 'semantic-ui-react';
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
        {menuItem: '📝', render: () => <ProfileAbout />},
        {menuItem: '📷', render: () => <ProfilePhotos profile={profile} />},
        {menuItem: '📆', render: () => <ProfileActivities/>},
        // {menuItem: '👥', render: () => <ProfileFollowings/>},
        // {menuItem: '👤', render: () => <ProfileFollowings/>},
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
