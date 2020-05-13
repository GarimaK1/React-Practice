import React from 'react';

const Welcome = () => {
    return (
        <div style={{textAlign: 'center' }}>
            <h3>Welcome to Contacts Manager</h3>
            <ul style={{ listStylePosition: 'inside'}}>
                <li>Register to create account and get started</li>
                <li>Login to manage contacts</li>
            </ul>
        </div>
    )
}

export default Welcome;
