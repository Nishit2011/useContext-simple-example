import React from "react";
import { NameContext } from "./Parent";

const Grandchild = () => {
  const data = React.useContext(NameContext);
  console.log(data);
  return <div>{data.value}</div>;
};

export default Grandchild;
