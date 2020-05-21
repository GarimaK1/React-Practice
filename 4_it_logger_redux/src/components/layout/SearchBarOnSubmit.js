/*
For Video#87, doubts about search functionality & onChange/onInput events
0
Garima · Lecture 87 · 11 hours ago
For Video#87, I have some doubts about the search functionality.
For search, the searchLogs action is getting fired on every keystroke entry. 
So are we hitting the search endpoint in server API on every keystroke?
I tried to find some alternative on the internet and it seems that React 
does not implement onInput event like normal DOM does, it uses onChange. 
Is that correct or am I misunderstanding? Is there a better way to do search
so that we are querying the server only once after we are done typing?

Leonidas
7 hours ago
Hi Garima
Yes in this app we are searching per keystroke for simplicity.
If you do not want it this way though, you can search on form submission, 
using the onSubmit event. In this case the input text is handled with useState.

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    searchLogs(text);
  };

  return (
    <nav style={‌{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form onSubmit={onSubmit}>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs..'
              onChange={(e) => onChange(e)}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);

Note: Also check this question on Lecture 87-
Why we dont use contolled input in here?

*/
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchLogs(text);
        setText('');
    };

    return (
        <Fragment>
            <nav className="purple">
                <div className="nav-wrapper">
                    <form onSubmit={handleSubmit} >
                        <div className="input-field">
                            <input
                                id="search"
                                type="search"
                                placeholder="Search Logs with useRef.."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
            <div className="purple nav-content" style={{ marginBottom: '1rem' }}>
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a href="#test1">Test 1</a></li>
                    <li className="tab"><a className="active" href="#test2">Test 2</a></li>
                    <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
                    <li className="tab"><a href="#test4">Test 4</a></li>
                </ul>
            </div>

        </Fragment>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
