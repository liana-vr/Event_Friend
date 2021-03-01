import React, { Fragment } from 'react';
import { Header, Label } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList(){
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;

    return(
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Label basic color='purple'>{group}</Label>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity}/>
                    ))}
                </Fragment>
            ))}
        </>
        
    )
})