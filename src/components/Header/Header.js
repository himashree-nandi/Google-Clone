import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import "./header.css"
import { Avatar } from "@mui/material";
export default function Header() {
  return (
      <div className=" d-flex justify-content-between px-6 " style={{padding:"20px",fontSize:"20px",flex:2}}>
        <div className=" d-flex" >
          <Link className="m-2 icon" > About</Link>
          <Link className="m-2 icon" >Store</Link>
        </div>
        <div className=" d-flex  justify-content-end" >
          <Link className="m-2 icon" >Gmail</Link>
          <Link className="m-2 icon" to="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl">Images</Link>
          <AppsIcon className="m-2"/>
          <Avatar alt="Remy Sharp" src="" className="avatar"/>
        </div>
      </div>
  );
} 
