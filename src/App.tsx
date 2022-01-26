import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import AddToList from "./components/AddToList";

// this imports the List function which returns tsx code. We can call it with
// typing <List> </List> inside our returned tsx.
import List from "./components/List";

// internal state of component
interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "firstName",
      age: 33,
      note: "always comes 5 min late.",
      url: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0",
    },
  ]);
  // [
  //     {
  //       name: "firstName",
  //       age: 33,
  //       note: "always comes 5 min late.",
  //     },
  //     {
  //       name: "secondName",
  //       age: 33,
  //     },
  // ]

  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddToList />
    </div>
  );
}

export default App;
