import React from "react";
import { Props } from "./Props";

const Button = (props: Props) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      
      <Button className="whatever"></Button>
      <Button className="my-class"></Button>
    </>
  );
};
};
