import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react'

interface Props {
    setFiles: (files: any) => void;
}

export default function PhotoWidgetDropzone({setFiles}: Props) {

    const dzStyles = {
        border: 'none',
        borderColor: '#a1cae2',
        borderRadius: '20px',
        paddingTop: '50px',
        textAlign: 'center' as 'center',
        height: 150,
        width: 150
    }

    const dzActive = {
        borderColor: 'pink'
    }

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [setFiles])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()} style={isDragActive ? {...dzStyles, ...dzActive} : dzStyles}>
            <input {...getInputProps()} />
            <Icon name='cloud upload' size='huge' />
            
        </div>
    )
}