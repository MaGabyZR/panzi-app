import { useState } from "react";
import Message from "./components/Message";
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

//Exercices and examples.
/* function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  /*   const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); */ //Replaced by the person object bellow, for best practice.
/*   const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  }); */

//const fullName = firstName + "" + lastName;

/*   const [isLoading, setLoading] = useState(false);

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
      <Message />
      <Message />
      <Message />
    </div>
  ); */

//Updating Arrays, do not mutate nor change them.
function App() {
  /*   const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add a new item to the array
    setTags([...tags, "exciting"]);
    //Remove an item
    setTags(tags.filter((tag) => tag! == "happy"));
    //Update an item.
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  }; */

  const [bugs, setBugs] = useState([
    { id: 1, tittle: "Bug 1", fixed: false },
    { id: 2, tittle: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
