import React from 'react';

const AddBtn = () => {
    // All buttons here are Materialize Modal Triggers
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large deep-orange modal-trigger">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#list-tech-modal" className="btn-floating green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating blue darken-1 modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn;
