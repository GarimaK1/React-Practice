import React from 'react';
import Alert from 'react-bootstrap/Alert';

const MyAlert = ({alert}) => { // state has {alert: { message, type }}
    // console.log(alert);
    return (
        alert !== null && (
            <Alert variant={alert.type} style={{ flexBasis: '100%', margin: '1rem' }}>
                {alert.message}
            </Alert>
        )
    )
}

export default MyAlert;