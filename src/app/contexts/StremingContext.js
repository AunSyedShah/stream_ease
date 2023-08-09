'use client';
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  streamingServices: [], // This should hold the list of streaming providers
  subscriptions: [],     // This should hold the list of subscriptions
};

// Create the context
const StreamingContext = createContext();

// Reducer function
const streamingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STREAMING_PROVIDER':
      return {
        ...state,
        streamingServices: [...state.streamingServices, action.payload],
      };
    case 'UPDATE_STREAMING_PROVIDER':
      // Implement update logic
      return state;
    case 'DELETE_STREAMING_PROVIDER':
      // Implement delete logic
      return state;
    case 'ADD_SUBSCRIPTION':
      // Implement add subscription logic
      return state;
    case 'UPDATE_SUBSCRIPTION':
      // Implement update subscription logic
      return state;
    case 'DELETE_SUBSCRIPTION':
      // Implement delete subscription logic
      return state;
    default:
      return state;
  }
};

// Streaming Provider Context Provider
export const StreamingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(streamingReducer, initialState);

  return (
    <StreamingContext.Provider value={{ state, dispatch }}>
      {children}
    </StreamingContext.Provider>
  );
};

// Custom hook to use the streaming context
export const useStreamingContext = () => {
  return useContext(StreamingContext);
};
