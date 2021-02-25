import React from 'react';
import { Grid, Header, Item, Segment, Statistic, Divider, Reveal, Button } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';

interface Props{
    profile: Profile;
}

export default observer(function ProfileHeader({profile}: Props){
    return(
        <Segment>
            <Grid>
                <Grid.Column width={12}>
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size='small' src={profile.image || '/assets/user.png'}/>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content={profile.displayName}/>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Statistic.Group widths={2}>
                        <Statistic label='Followers' value='5'/>
                        <Statistic label='Following' value='23'/>
                    </Statistic.Group>
                    <Divider />
                    <Reveal animated='move'>
                        <Reveal.Content visible style={{width: '100%'}}>
                            <Button fluid color='purple' content='Following'/>
                        </Reveal.Content>
                        <Reveal.Content hidden style={{width: '100%'}}>
                            <Button fluid basic
                                color={true ? 'pink' : 'purple'} 
                                content={true ? 'Unfollow' : 'Follow'}/>
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
            </Grid>
        </Segment>
    )
})