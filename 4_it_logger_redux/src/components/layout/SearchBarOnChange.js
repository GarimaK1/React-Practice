import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
    const text = useRef('');

    const handleChange = () => {
        searchLogs(text.current.value);
    };

    return (
        <nav className="purple" style={{marginBottom: '1rem'}}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input 
                            id="search" 
                            type="search" 
                            placeholder="Search Logs with handleChange, useRef on every keystroke.." 
                            ref={text} 
                            onChange={handleChange} 
                        />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
