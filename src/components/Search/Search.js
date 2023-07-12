import React, { useState } from "react";
import "./search.css";

import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const inputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(searchInput)
    navigate(`/search?query=${searchInput}`);
  };
  return (
    <div>
      <div
        className="justify-content-center align-items-center d-flex"
        style={{ marginTop: "150px" }}
      >
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
      </div>
      <div className="input">
        <SearchBar
          inputChange={inputChange}
          formSubmit={formSubmit}
          searchInput={searchInput}
        />
      </div>
      <div className="justify-content-center align-items-center d-flex m-4">
        <input className="m-3 px-3" type="submit" value="Google Search" />
        <Link to="https://www.google.com/doodles">
          <input
            className=" m-3 px-3"
            type="submit"
            value="I'm Feeling Lucky"
          />
        </Link>
      </div>
    </div>
  );
}
