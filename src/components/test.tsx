import React from "react";
import { useState } from "react";
import { getUserInfo } from "../../stores/users";

const AddButton = () => {
  const [name, setName] = useState("");

  return (
    <div>
        <label htmlFor="test">Test</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getUserInfo(name)}>add</button>
    </div>
  );
};

export default AddButton;