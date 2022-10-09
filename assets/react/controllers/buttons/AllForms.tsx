import React from 'react';
import Submit from "./Submit";
import Cancel from "./Cancel";
import Reset from "./Reset";

interface Props {
    submit: string
    cancel: string
}

export default function AllForms (props: Props) {
    return (
        <div className={"form-group group-end"}>
            <Submit content={props.submit}></Submit>
            <Reset></Reset>
            <Cancel content={props.cancel}></Cancel>
        </div>
    )
}