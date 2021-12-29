import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange}>
      <option selected="selected" value={'No contact is selected'}>No contact is selected</option>
      {props.contacts.map( (contact, ind) => <option value={contact.name} key={ind}>{contact.name}</option> )}

    </select>
    
  );
};
