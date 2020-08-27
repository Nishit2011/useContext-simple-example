import React from "react";

//importing the context
import { NameContext } from "./Parent";

//passing the imported context to useContext hooks
const Grandchild = () => {
  const data = React.useContext(NameContext);
  return <div>{data}</div>;
};

export default Grandchild;
