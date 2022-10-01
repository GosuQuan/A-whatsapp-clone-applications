import React from "react";
import {ListGroup} from "react-bootstrap"
import {useConversations} from '../contexts/ConversationsProvider'
function Conversations() {
  const {conversations} = useConversations()
  return (
    <div>
      {" "}
      <ListGroup variant="flush">
        {conversations.map((conversation,index) => {
          return (
            <ListGroup.Item key={index}>
              {conversation.recipients.map(recipient =>recipient.name).join(',')}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Conversations;
