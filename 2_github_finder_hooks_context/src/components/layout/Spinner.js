import React, { Fragment } from 'react';
import { Spinner } from "react-bootstrap";

const MySpinner = () => {
        return (
            <Fragment> 
                <Spinner animation="border" role="status" style={{ width: '4rem', height: '4rem' }}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Fragment>
        )
}

export default MySpinner;
