import React, { useEffect } from "react";
import Grandchild from "./Grandchild";
import { NameContext } from "./Parent";

const Child = () => {
  const { value, setValue } = React.useContext(NameContext);

  useEffect(() => {
    setValue("from child");
  }, []);
  return (
    <div>
      <Grandchild />
    </div>
  );
};

export default Child;
