import React, { useEffect, useState } from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import PhotoWidgetCropper from './PhotoWidgetCropper';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default function PhotoUploadWidget({loading, uploadPhoto}: Props){
    const [files, setfiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop(){
        if (cropper){
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files])

    return(
        <Grid>
            <Grid.Column width={4}>
                <Header className='picUploadHeading' sub color='black' content='Step 1 - Add Image'/>
                <PhotoWidgetDropzone setFiles={setfiles}/>
            </Grid.Column>
            <Grid.Column width={1}/>
            <Grid.Column width={4}>
                <Header className='picUploadHeading' sub color='black' content='Step 2 - Resize Image'/>
                {files && files.length > 0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview}/>
                )}
            </Grid.Column>
            <Grid.Column width={1}/>
            <Grid.Column width={4}>
                <Header className='picUploadHeading' sub color='black' content='Step 3 - Preview and Upload'/>
                {files && files.length > 0 && 
                    <>
                        <div className='img-preview' style={{minHeight: 150, overflow: 'hidden', borderRadius: '20px', textAlign: 'center'}}/>
                        <Button.Group className='photoButtons' widths={2}>
                            <Button className='checkPic' loading={loading} onClick={onCrop} color='blue' size='mini' icon='check' style={{marginTop: 12}}/>
                            <Button className='cancelPic' disabled={loading} onClick={() => setfiles([])} size='mini' icon='close' style={{marginTop: 12}}/>
                        </Button.Group>
                    </>}
            </Grid.Column>
        </Grid>
    )
}