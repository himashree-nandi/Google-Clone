import React, { useState } from "react";
import "./search.css";

import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate=useNavigate()
  const inputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const formSubmit=(e)=>{
e.preventDefault()
// console.log(searchInput)
navigate(`/search?query=${searchInput}`)
  }
  return (
    <>
      <div
        className="justify-content-center align-items-center d-flex"
        style={{ marginTop: "100px" }}
      >
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
      </div>
      <SearchBar inputChange={inputChange} formSubmit={formSubmit} searchInput={searchInput}/>
    </>
  );
}
