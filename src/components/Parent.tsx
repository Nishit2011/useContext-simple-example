import React from "react";
import Child from "./Child";

//creating a named context
export const NameContext = React.createContext();
const Parent = () => {
  const { Provider } = NameContext;

  //passing a value in the provider
  return (
    <div>
      <Provider value="abcccc">
        <Child />
      </Provider>
    </div>
  );
};

export default Parent;
