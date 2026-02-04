import React from "react";
let count = 0; //keeping it without change, makes it pure. Declare it inside the function to keep it pure.

const Message = () => {
  count++; //makes the component impure.
  return <div>Message{count}</div>;
};

export default Message;
