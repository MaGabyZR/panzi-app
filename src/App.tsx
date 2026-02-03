import Message from "./assets/message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Guatemala", "Panama", "Costa Rica", "Mexico", "Argentina"];
  return (
    //<div><Message /></div>
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
