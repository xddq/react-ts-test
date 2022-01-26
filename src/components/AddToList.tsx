import React, { useState } from "react";

// this will be the name of the html elemnt I think.
const AddToList = () => {
  // two-way binding react
  const [input, setInput] = useState({ age: "", name: "", url: "", notes: "" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // TODO(pierre): why does this overwrite one attribute?
    setInput({ ...input, [event.target.name]: event.target.value });
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
        type="text"
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
    </div>
  );
};

export default AddToList;
