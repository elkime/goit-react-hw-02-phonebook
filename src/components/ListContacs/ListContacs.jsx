import React from 'react';
import { List, ListItem, ListName, ListNumber, ListDelete } from './StyledList';

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map((contact, index) => (
        <ListItem key={index}>
          <ListName>{contact.name}</ListName>
          <ListNumber>{contact.number}</ListNumber>
          <ListDelete onClick={() => onDeleteContact(index)}>X</ListDelete>
        </ListItem>
      ))}
    </List>
  );
};

export default ListContacts;
