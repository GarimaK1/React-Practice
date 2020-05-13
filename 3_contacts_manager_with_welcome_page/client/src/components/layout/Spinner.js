import React from 'react';
import { Spinner } from "react-bootstrap";

const MySpinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" style={{ width: '4rem', height: '4rem' }}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default MySpinner;
