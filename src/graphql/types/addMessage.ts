/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MessageInput } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: addMessage
// ====================================================

export interface addMessage_addMessage {
  __typename: "Message";
  id: string;
  /**
   * Message content
   */
  text: string;
}

export interface addMessage {
  /**
   * Add a message and publish it on 'messages' subscription channel
   */
  addMessage: addMessage_addMessage;
}

export interface addMessageVariables {
  input: MessageInput;
}
