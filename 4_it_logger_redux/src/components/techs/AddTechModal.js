import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter First and Last Name!', classes: 'rounded' });
        } else {
            console.log(firstName + ' ' + lastName);
            setFirstName('');
            setLastName('');
        }
    }

    // Materialize Modal Structure
    return (
        <div id="add-tech-modal" className="modal" style={{width: '50%'}}>
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a
                        href="#!"
                        className="modal-close waves-effect waves-green btn"
                        onClick={handleSubmit}
                    >
                        Add Technician
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AddTechModal;