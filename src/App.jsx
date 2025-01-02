//import { useState } from 'react'

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initContacts from "./data/contacts.json";
import { useEffect, useState } from "react";
//import * as Yup from "";

function App() {
  const [inputValue, setInputValue] = useState(() => {
    return JSON.parse(localStorage.getItem("searchValue")) ?? "";
  });
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem("savedContacts")) ?? initContacts;
  });

  useEffect(() => {
    localStorage.setItem("searchValue", JSON.stringify(inputValue));
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contact));
  }, [contact]);

  const handleChangeInput = (inputValue) => {
    setInputValue(inputValue);
  };
  const visibleContatcs = contact.filter((cont) =>
    cont.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  const addContact = (newContact) => {
    setContact((prev) => {
      return [...prev, newContact];
    });
  };
  const deleteContact = (contactID) => {
    setContact((prev) => {
      return prev.filter((contact) => contact.id != contactID);
    });
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox inputValue={inputValue} handleChange={handleChangeInput} />
        <ContactList data={visibleContatcs} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
