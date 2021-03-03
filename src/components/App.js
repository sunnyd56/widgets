import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./search";
import Dropdown from "./Dropdown";
import Translate from "./translate";
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  { label: "the color red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A shade of blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <br />
      <Translate />
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> */}
      {/* ) : null} */}
    </div>
  );
};
