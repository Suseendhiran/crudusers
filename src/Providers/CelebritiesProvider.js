import React, { createContext, useContext, useState } from "react";

export const celebrityContext = createContext();

function CelebritiesProvider({ children }) {
  const [celebs, setCelebs] = useState();

  return (
    <celebrityContext.Provider value={{ celebs, setCelebs }}>
      {children}
    </celebrityContext.Provider>
  );
}

export function useCelebrities() {
  return useContext(celebrityContext);
}

export default CelebritiesProvider;
