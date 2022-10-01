import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"
export function useContacts(){
  return useContext(ContactsContext)
}
const ContactsContext = React.createContext();
function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };
  return (
    <div>
      <ContactsContext.Provider value={{ contacts, createContact }}>
        {children}
      </ContactsContext.Provider>
    </div>
  );
}

export default ContactsProvider;
