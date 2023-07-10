import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import "./header.css"
import { Avatar } from "@mui/material";
export default function Header() {
  return (
      <div className=" d-flex justify-content-between px-6 " style={{padding:"20px",fontSize:"20px",flex:2}}>
        <div className=" d-flex" >
          <Link className="m-2 " > About</Link>
          <Link className="m-2 " >Store</Link>
        </div>
        <div className=" d-flex  justify-content-end" >
          <Link className="m-2 " >Gmail</Link>
          <Link className="m-2 ">Images</Link>
          <AppsIcon className="m-2"/>
          <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/AAcHTtdd2wEIOEcGPPHSCPvlxcJ38NojtTuHrgpTr8gklJ8nKIE=s96-c-rg-br100"/>
        </div>
      </div>
  );
} 
