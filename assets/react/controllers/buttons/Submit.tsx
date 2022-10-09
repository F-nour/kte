import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    content: string
}

export default function Submit (props: Props) {
    return (
            <Button variant={"success btn-icon-check"} type={"submit"}>{props.content}</Button>
        )
}