import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
            <a href="#!" className="secondary-content" >
                <i className="material-icons grey-text">delete</i>
            </a>
            <p className="grey-text">
                <span className='black-text' >ID #{log.id}</span>
                <span> was updated by </span>
                <span className='black-text' >{log.tech}</span>
                <span> on </span>
                <Moment format="MMMM Do YYYY HH:mm:ss a">{log.date}</Moment>
            </p>
        </li>
    )
}

LogItem.propType = {
    log: PropTypes.object.isRequired
}

export default LogItem;