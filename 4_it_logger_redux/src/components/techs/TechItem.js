import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => {
    return (
        <li className="collection-item">
            <p>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content" >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </p>
        </li>
    )
}

TechItem.propType = {
    tech: PropTypes.object.isRequired
}

export default TechItem;
