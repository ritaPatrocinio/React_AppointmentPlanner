import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import {TileList} from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newAppointments(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');

    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} setTitle={setTitle} contact={contact} handleSubmit={handleSubmit}
        setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} contacts={props.contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={props.appointments}></TileList>
      </section>
    </div>
  );
};
