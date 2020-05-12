import React, { useContext, useState } from 'react';
import AlertContext from "../../context/alert/alertContext";
import Alert from 'react-bootstrap/Alert';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const { removeAlert } = alertContext;
    const [show, setShow] = useState(true);

    /* This works too (code to write dismissable alerts)-
    useEffect(() => {
        setShow(true);
    }, [show]);
    
    return (
        (alertContext.alerts.length > 0 && show) && alertContext.alerts.map(alert =>
            < Alert 
                key={alert.id} 
                variant={`${alert.type}`} 
                onClose={() => {removeAlert(alert.id); setShow(false);} } 
                dismissible 
            >
                {alert.msg}
            </ Alert>
        )
    )
    */

    const handleClose = (id) => {
        setShow(false);
        removeAlert(id); 
        setShow(true);
    }

    return (
        (alertContext.alerts.length > 0 && show) && alertContext.alerts.map(alert =>
            < Alert
                key={alert.id}
                variant={`${alert.type}`}
                onClose={() => handleClose(alert.id)}
                dismissible
            >
                {alert.msg}
            </ Alert>
        )
    ) 
}

export default Alerts; 