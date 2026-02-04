import Message from "./assets/message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

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
  return (
    <div>
      {/*       <Alert>
        Watch <span>out!</span>
      </Alert> */}
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
