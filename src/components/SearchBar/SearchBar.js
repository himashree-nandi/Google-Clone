import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import './searchBar.css'
export default function SearchBar(props) {
  return (
    <div>
        <div className=" d-flex justify-content-center align-items-center">
          <div>
          <form className="mt-4" onSubmit={props.formSubmit}>
            <div className='search'>
            <SearchIcon className='searchIcon'/>
            <input
              onChange={props.inputChange}
              value={props.searchInput}
              type="text"
              className="inputText text-black"
              // style={{ borderRadius: "50px", width: "300px", height: "40px" }}
            />
            <KeyboardVoiceIcon className='searchIcon' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
