import React from 'react'
import {ListGroup} from "react-bootstrap"
import {useContacts} from "../contexts/ContactsProvider"
function Contacts() {
  const {contacts} = useContacts()
  return (
    <div>
      <ListGroup variant="flush">
        {contacts.map(contact=>{
        return (<ListGroup.Item key={contact.id}>
          {contact.name}
          </ListGroup.Item>
        )})}
      </ListGroup>
    </div>
  )
}

export default Contacts