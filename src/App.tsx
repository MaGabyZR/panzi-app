import { useState } from "react";
import Message from "./assets/message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import { FaCalendar } from "react-icons/fa";
import Like from "./components/Like/Like";

/* function App() {
  let items = ["Guatemala", "Panama", "Costa Rica", "Mexico", "Argentina"];

  const handleSelectItem = (item: string) => {
    console.log(item);

  return (
    //<div><Message /></div>
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
} */

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <FaCalendar color="purple" size={40} />
      <Like onClick={() => console.log("clicked!")} />
    </div>
  );
}

export default App;
