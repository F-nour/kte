import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    content: string
}

export default function Cancel (props: Props) {
    return (
            <Button variant={"cancel btn-icon-cancel"} type={"submit"}>{props.content}</Button>
        )
}