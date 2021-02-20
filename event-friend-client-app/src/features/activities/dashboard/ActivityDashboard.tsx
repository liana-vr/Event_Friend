import React from 'react';
import { Grid, GridColumn} from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityDetais from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDashboard(){
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetais />}
                {editMode &&
                <ActivityForm/>}
            </GridColumn>
        </Grid>
    )
})