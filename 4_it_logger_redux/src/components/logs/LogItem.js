import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog }) => {
    const handleDelete = () => {
        deleteLog(log.id);
        M.toast({ html: 'Log deleted.'});
    }
    return (
        <li className="collection-item">
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
                {log.message}
            </a>
            <a href="#!" className="secondary-content" onClick={handleDelete}>
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
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
}

// not bringing any state as prop to component. So putting null in place of 'mapStateToProps'
export default connect(null, { deleteLog })(LogItem);