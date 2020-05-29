import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const MySpinner = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Spinner animation="border" role="status" style={{ width: '6rem', height: '6rem' }}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
}

export default MySpinner;