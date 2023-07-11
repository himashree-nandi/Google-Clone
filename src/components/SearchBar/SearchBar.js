import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
export default function SearchBar(props) {
  return (
    <div>
        <div className=" d-flex justify-content-center align-items-center">
        <div>
          <form className="mt-4" onSubmit={props.formSubmit}>
            <SearchIcon />
            <input
              onChange={props.inputChange}
              value={props.searchInput}
              type="text"
              className="text"
              style={{ borderRadius: "50px", width: "300px", height: "40px" }}
            />
            <KeyboardVoiceIcon />
          </form>
        </div>
      </div>
    </div>
  )
}
