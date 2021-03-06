import { Formik, Form, Field, FieldProps } from 'formik'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Comment, Loader, Label, Button } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns'
import MyTextArea from '../../../app/common/form/MyTextArea'

interface Props {
    activityId: string;
}

export default observer(function ActivityDetailedChat({ activityId }: Props) {
    const { commentStore } = useStore();

    useEffect(() => {
        if (activityId) {
            commentStore.createHubConnection(activityId);
        }
        return () => {
            commentStore.clearComments();
        }
    }, [commentStore, activityId]);

    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='purple'
                style={{ border: 'none' }}
            >
                <Label classname='chatLabel' basic color='purple'>Event Chat</Label>
            </Segment>
            <Segment attached clearing>
                <Formik
                    onSubmit={(values, { resetForm }) =>
                        commentStore.addComment(values).then(() => resetForm())}
                    initialValues={{ body: '' }}
                    validationSchema={Yup.object({
                        body: Yup.string().required()
                    })}
                >
                    {({ isSubmitting, isValid, handleSubmit }) => (
                        // <Form className='ui form'>
                        //     <Field name='body'>
                        //         {(props: FieldProps) => (
                        //             <div style={{ position: 'relative' }}>
                        //                 <Loader active={isSubmitting} />
                        //                 <textarea
                        //                     placeholder='Say Something! (Enter to submit)'
                        //                     rows={2}
                        //                     {...props.field}
                        //                     onKeyPress={e => {
                        //                         if (e.key === 'Enter' && e.shiftKey) {
                        //                             return;
                        //                         }
                        //                         if (e.key === 'Enter' && !e.shiftKey) {
                        //                             e.preventDefault();
                        //                             isValid && handleSubmit();
                        //                         }
                        //                     }}
                        //                 />
                        //             </div>
                        //         )}
                        //     </Field>
                        // </Form>
                        <Form className='ui form'>
                            <MyTextArea placeholder='Say Something...' name='body' rows={2}/>
                            <Button className='addChatButton' loading={isSubmitting} disabled={isSubmitting || !isValid} content='Add'
                                labelPosition='left' icon='edit' color='purple' type='submit' floated='right'/>
                        </Form>
                    )}
                </Formik>
                <Comment.Group>
                    {commentStore.comments.map(comment => (
                        <Comment key={comment.id}>
                            <Comment.Avatar src={comment.image || '/assets/user.png'} />
                            <Comment.Content>
                                <Comment.Author as={Link} to={`/profiles/${comment.username}`}>
                                    {comment.displayName}
                                </Comment.Author>
                                <Comment.Metadata>
                                    <div>{formatDistanceToNow(comment.createdAt)} ago</div>
                                </Comment.Metadata>
                                <Comment.Text style={{ whiteSpace: 'pre-wrap' }}>{comment.body}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </Segment>
            <Segment className='bottomSegment' attached='bottom'></Segment>
        </>

    )
})