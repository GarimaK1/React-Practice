import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    const handleSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and technician!', classes: 'rounded' });
        } else {
            console.log(message + ' ' + tech + ' ' + attention);
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
                        <label htmlFor="message">Log Message</label>
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
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sarah Wilson">Sarah Wilson</option>
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
                        Add Log
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

export default EditLogModal;