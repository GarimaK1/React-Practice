import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import ShowLoading from '../layout/ShowLoading';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setLoading(true);
        try {
            const res = await fetch('/logs');
            // console.log(res);
            const data = await res.json();
            // console.log(data);
            setLogs(data);
            setLoading(false);
        } catch (error) {
            console.log(error);   
        }
    };

    if (loading) {
        return <ShowLoading />
    }

    if (!loading && logs.length === 0) {
        return (
            <p>No logs present.</p>
        )
    } else {
        // console.log(logs);
        return (
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4>System Logs</h4>
                </li>
                {
                    logs.map(log => <LogItem key={log.id} log={log} />)
                }
            </ul>
        )
    }
    /*
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4>System Logs</h4>
            </li>
            {
                (!loading && logs.length === 0) 
                ? (<p>No logs present.</p>) 
                : (logs.map(log => <li className="collection-item" key={log.id}>{log.message}</li>))
            }
        </ul>
    )
    */
}

export default Logs;
