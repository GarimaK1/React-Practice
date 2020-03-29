import React from 'react';
import Alert from 'react-bootstrap/Alert';
import AlertContext from "../../context/alert/alertContext";
import { useContext } from 'react';

const MyAlert = () => { // state has {alert: { message, type }}
    // console.log(alert);
    // Refer: https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored

    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <Alert variant={alert.type} style={{ flexBasis: '100%', margin: '1rem' }}>
                {alert.message}
            </Alert>
        )
    )
}

export default MyAlert;