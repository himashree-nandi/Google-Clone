import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
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
      <div className=" d-flex justify-content-center align-items-center">
        <div>
          <form className="mt-4" onSubmit={formSubmit}>
            <SearchIcon />
            <input
              onChange={inputChange}
              value={searchInput}
              type="text"
              className="text"
              style={{ borderRadius: "50px", width: "300px", height: "40px" }}
            />
            <KeyboardVoiceIcon />
          </form>
        </div>
      </div>
    </>
  );
}
