
import React from 'react';

const Contracts = (props) => (
    <ul>
        {
            props.contacts.map(
                (contact, index) =>
                    <li key={index}>{contact.name} - {contact.address}</li>
            )
        }
    </ul>
)

export default Contracts
