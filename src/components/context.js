// context.js
import React, { createContext, useState } from 'react';

// Create the context
const Context = createContext();

// Create a provider component
export const ContextProvider = ({ children }) => {
  // State to hold the data
  const [data, setData] = useState({
    titles: '',
    picture: '',
    price: '',
    quantity: '',
    total: ''
  });

  // Provide the context value to the components
  const contextValue = { data, setData };

  // Render the provider with its children
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

// Export the context and provider
export { Context};
