import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog, clearCurrent } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if (current) {
            M.updateTextFields();
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, [current]);

    const handleSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and technician!', classes: 'rounded' });
        } else {
            console.log(message + ' ' + tech + ' ' + attention); // updated values 
            console.log(current.message + ' ' + current.tech + ' ' + current.attention); // old values
            const updatedLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date()
            }
            // different than updateLog(current); current will have old values, not updated ones
            updateLog(updatedLog); 

            M.toast({ html: `Log updated by ${tech}`});

            setMessage('');
            setAttention(false);
            setTech('');
        }
    }

    // Materialize Modal Structure
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="message"
                            name="message"
                            value={message}
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label className="active" htmlFor="message">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <select
                            className="browser-default"
                            name="tech"
                            value={tech}
                            onChange={(e) => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={() => setAttention(!attention)}
                                />
                                <span>Attention Required</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="modal-footer">
                    <a
                        href="#!"
                        className="modal-close waves-effect waves-green btn"
                        onClick={handleSubmit}
                    >
                        Update Log
                    </a>
                </div>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '65%',
    height: '70%'
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    current: state.log.current
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(EditLogModal);