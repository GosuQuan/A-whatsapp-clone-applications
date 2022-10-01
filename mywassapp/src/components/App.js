import React from 'react'
import ContactsProvider from "../contexts/ContactsProvider"
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import ConversationsProvider from "../contexts/ConversationsProvider";
function App() {
    const [id,setId] = useLocalStorage('id')
    const dashboard = (<ContactsProvider>
      <ConversationsProvider >
      <Dashboard id={id}></Dashboard>
      </ConversationsProvider>
    </ContactsProvider>)
 return(
   id?dashboard:<Login onIdSubmit={setId}></Login>
 
)}

export default App;
