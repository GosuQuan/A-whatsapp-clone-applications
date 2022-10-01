import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useContacts from "./ContactsProvider";
export function useConversations() {
  return useContext(ConversationsContext);
}
const ConversationsContext = React.createContext();
export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const { contacts } = useContacts();

  const createConversation = (recipients) => {
    setConversations((preRecipients) => {
      return [...preRecipients, { recipients, messages: [] }];
    });
  };
  const formattedConversations = conversations.map((conversation) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    return { ...conversations, recipients };
  });
  const value = {
    conversations: formattedConversations,
    createConversation,
  };
  return (
    <div>
      <ConversationsContext.Provider value={value}>
        {children}
      </ConversationsContext.Provider>
    </div>
  );
}

export default ConversationsProvider;
