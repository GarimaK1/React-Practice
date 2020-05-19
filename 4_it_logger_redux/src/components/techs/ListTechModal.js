import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const ListTechModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        try {
            setLoading(true);
            const resp = await fetch('/techs');
            const data = await resp.json();

            setTechs(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (!loading && techs.length === 0) {
        return (
            <div id="list-tech-modal" className="modal" style={{ width: '50%' }}>
                <div className="modal-content">
                    <h4>Technician List</h4>
                    <h6>No technicians found.</h6>
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

export default ListTechModal;