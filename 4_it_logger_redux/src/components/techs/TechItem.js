import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: {id, firstName, lastName}, deleteTech }) => {
    const handleDelete = () => {
        deleteTech(id);
        M.toast({ html: `${firstName} ${lastName} removed as technician`})
    }

    return (
        <li className="collection-item">
            <p>
                {firstName} {lastName}
                <a href="#!" className="secondary-content" onClick={handleDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </p>
        </li>
    )
}

TechItem.propType = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem);
