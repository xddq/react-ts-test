import React, { useState } from "react";

// this will be the name of the html elemnt I think.
const AddToList = () => {
  // two-way binding react
  const [input, setInput] = useState({ age: "", name: "", url: "", notes: "" });

  const handleChange = () => {};

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange()}
        name="name"
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange()}
        value={input.age}
      />
      <input
        type="text"
        name="image"
        placeholder="Image Url"
        className="AddToList-input"
        onChange={handleChange()}
        value={input.url}
      />
      <textarea
        name="notes"
        placeholder="Notes"
        className="AddToList-input"
        value={input.notes}
      />
    </div>
  );
};

export default AddToList;
