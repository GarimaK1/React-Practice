import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import MySpinner from '../layout/Spinner';

const Contacts = () => {
    // useContext(MyContext) only lets you read the context and subscribe to its changes. 
    // You still need a <MyContext.Provider> above in the tree to provide the value for this context.
    // In our application, provider is given in contactState.js file, which is wrapped around App.js
    // Refer 'Putting it together with Context.Provider' under 'useContext' API reference to understand better.
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])

    if (!loading && contacts) {
        return (
            <Fragment>
                <h4 style={{ margin: '0.1rem 0.3rem' }}>My Contacts</h4>
                {(contacts.length === 0) && <h6 style={{ margin: '1.5rem 0.3rem' }}>
                    No contacts found. Please add a new contact.
            </h6>}
                {
                    filtered
                        ? filtered.map(contact => <ContactItem key={contact._id} contact={contact} />)
                        : contacts.map(contact => <ContactItem key={contact._id} contact={contact} />)
                }
            </Fragment>
        )
    } else {
        return(<MySpinner />)
    }
    
}

export default Contacts;