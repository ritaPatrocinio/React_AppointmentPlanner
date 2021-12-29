import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate===false){
      props.newContacts(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=>{
     const duplicates = props.contacts.filter((contact => contact.name === name ));
    if( duplicates.length > 0 ){
      setDuplicate(true);
  } else {setDuplicate(false)};
}, [name, props.contacts])
 

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <ContactForm name={name} phone={phone} email={email} 
      setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit}></ContactForm>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}></TileList>
      </section>
    </div>
  );
};
