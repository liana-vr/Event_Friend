import React from 'react';
import Calendar from 'react-calendar';
import { Header, Label, Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityFilters(){
    const {activityStore: {predicate, setPredicate}} = useStore();
    return(
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 27}}>
                <Label icon='filter' basic color='purple' content='Filters' className='activityFilters'/>
                <Menu.Item content='All Events' active={predicate.has('all')} 
                    onClick={() => setPredicate('all', 'true')}/>
                <Menu.Item content='I am Attendng' active={predicate.has('isGoing')} 
                    onClick={() => setPredicate('isGoing', 'true')}/>
                <Menu.Item content='I am Hosting' active={predicate.has('isHost')} 
                    onClick={() => setPredicate('isHost', 'true')}/>
            </Menu>
            <Header />
            <Calendar onChange={(date) => setPredicate('startDate', date as Date)}
                value={predicate.get('startDate') || new Date()}/>
        </>
    )
})