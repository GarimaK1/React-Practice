import React from 'react';

class DisplayName extends React.Component {
    render() {
        return (
            <div style={{ margin: '2rem' }}>{this.props.name}</div>
        );
    }
}

export default DisplayName;