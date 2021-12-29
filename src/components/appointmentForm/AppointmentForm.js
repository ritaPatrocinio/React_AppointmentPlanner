import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const titleChange = (e) => {
    setTitle(e.target.value) 
  }

  const contactChange = (e) => {
    setContact(e.target.value) 
  }

  const dateChange = (e) => {
    setDate(e.target.value) 
  }

  const timeChange = (e) => {
    setTime(e.target.value) 
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Title
      <input type='text' value={title} onChange={titleChange}></input>
      </label>
      <label>Date
      <input type='text' value={date} min={getTodayString} onChange={dateChange}></input>
      </label>
      <label>Time
      <input type='text' value={time} onChange={timeChange}></input>
      </label>
      <label>Contact
      <ContactPicker contacts={contacts} onChange={contactChange}></ContactPicker>
      {/* <input type='text' value={contact} ></input> */}
      </label>
      
      <input type='submit' ></input>
    </form>
    
  );
};
