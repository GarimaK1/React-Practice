import React, { useEffect } from 'react';
import LogItem from './LogItem';
import ShowLoading from '../layout/ShowLoading';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading || logs === null) { // because logs is null at first, before it fetches logs from API
        return <ShowLoading />
    }

    if (!loading && logs.length === 0) {
        return (
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4>System Logs</h4>
                </li>
                <li className="collection-item">No logs present.</li>
            </ul>
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

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
};

// get anything from app level state as prop in this component.
const mapStateToProps = (state) => ({
    log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
