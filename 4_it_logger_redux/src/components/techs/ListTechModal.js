import React, { useEffect } from 'react';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const ListTechModal = ({ getTechs, tech: { techs, loading} }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    if (!loading && (techs === null || techs.length === 0)) {
        return (
            <div id="list-tech-modal" className="modal" style={{ width: '50%' }}>
                <div className="modal-content">
                    <ul className="collection">
                        <li className="collection-header">
                            <h4>Technician List</h4>
                        </li>
                        <li className="collection-item">No technicians found.</li>
                    </ul>
                </div>
            </div>
        )
    } else {
        // Materialize Modal Structure
        return (
            <div id="list-tech-modal" className="modal" style={{ width: '50%' }}>
                <div className="modal-content">
                    <h4>Technician List</h4>

                    <ul className="collection">
                        {
                            techs.map(tech => <TechItem tech={tech} key={tech.id} />)
                        }
                    </ul>

                    <div className="modal-footer">
                        <a
                            href="#!"
                            className="modal-close waves-effect waves-green btn"
                        >
                            Close
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

ListTechModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(ListTechModal);