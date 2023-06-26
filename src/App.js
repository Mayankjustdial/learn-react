import React from "react";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div>
      <UserContext.Provider value={"Mayank"}>
        <ChannelContext.Provider value={"CodeEvolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
