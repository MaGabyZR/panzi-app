function Message() {
  const name = "Panzi!";
  if (name) return <h1>Hello {name}!</h1>;
  return <h1>Bye User!</h1>;
}

export default Message;
