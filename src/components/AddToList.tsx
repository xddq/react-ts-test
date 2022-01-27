import React, { useState } from "react";
// imports the state interface from App.tsx and treats at is IProps.
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

// this will be the name of the html elemnt I think.
const AddToList: React.FunctionComponent<IProps> = ({ people, setPeople }) => {
  // two-way binding react
  const [input, setInput] = useState({ age: "", name: "", url: "", notes: "" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // TODO(pierre): why does this overwrite one attribute?
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // check if we don't have an empty string.
    if (!input.name || !input.age || !input.url) {
      return;
    }

    // add person to people
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.notes,
      },
    ]);

    // clear input after submitting
    setInput({ age: "", name: "", url: "", notes: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        // NOTE: can write ths and hover e to get the type!
        // onChange={(e) => {}}
        name="name"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange}
        value={input.age}
      />
      <input
        type="text"
        name="url"
        placeholder="Image Url"
        className="AddToList-input"
        onChange={handleChange}
        value={input.url}
      />
      <textarea
        name="notes"
        placeholder="Notes"
        className="AddToList-input"
        onChange={handleChange}
        value={input.notes}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List!
      </button>
    </div>
  );
};

export default AddToList;
