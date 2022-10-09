import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Reset() {
    useState(false);

    return (
        <>
            <Button variant={"reset btn-icon-reset"} type={"reset"}>Effacer</Button>
        </>
        )
}