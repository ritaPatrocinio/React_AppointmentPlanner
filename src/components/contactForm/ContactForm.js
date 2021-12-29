import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const nameChange = (e) => {
    setName(e.target.value) 
  }

  const phoneChange = (e) => {
    setPhone(e.target.value) 
  }

  const emailChange = (e) => {
    setEmail(e.target.value) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name
      <input type='text' value={name} name="name" onChange={nameChange}></input>
      </label>
      <label>Phone
      <input type='tel' value={phone} onChange={phoneChange}></input>
      </label>
      <label>Email
      <input type='email' value={email} onChange={emailChange}></input>
      </label>
      <input type='submit' ></input>
    </form>
    
  );
}
