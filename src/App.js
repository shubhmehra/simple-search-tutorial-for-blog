import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h3>Basic Search Filter React Tutorial</h3>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((value) => {
        if (searchTerm == "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
