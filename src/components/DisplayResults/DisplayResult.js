import React from "react";
import { Link } from "react-router-dom";

export default function DisplayResult({ item }) {
  // console.log(item);
  //Image, heytperlink , decription URL , heading
  //   cacheId: "UInCiDfJyeUJ";
  //   displayLink: "en.wikipedia.org";
  //   formattedUrl: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program";
  //   htmlFormattedUrl: "https://en.wikipedia.org/wiki/%22<b>Hello</b>,_<b>World</b>!%22_program";
  //   htmlSnippet: "A &quot;<b>Hello</b>, <b>World</b>!&quot; program is generally a computer program that ignores any input, and outputs or displays a message similar to &quot;<b>Hello</b>, <b>World</b>!&quot;.";
  //   htmlTitle: "&quot;<b>Hello</b>, <b>World</b>!&quot; program - Wikipedia";
  //   kind: "customsearch#result";
  //   link: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program";
  //   pagemap: {
  //     metatags: Array(1);
  //   }
  //   snippet: 'A "Hello, World!" program is generally a computer program that ignores any input, and outputs or displays a message similar to "Hello, World!".';
  //   title: '"Hello, World!" program - Wikipedia';
  const heading = item.title;
  const displayLink = item.displayLink;
  const image = item.pagemap.metatags[0]["og:image"];
  console.log(item.pagemap.metatags[0]);
  const description = item.snippet;
  const url = item.link;
  return (
    <div className="d-flex flex-column container-fluid">
      <div>
      <h5 className="text-primary">{heading}</h5>
      <img src={image} width="60px" height={"50px"} className="m-2" />
      <Link to={`${url}`}>
                {displayLink}
            </Link> 

      </div>

      <div className="m2">

      </div>
      <div><p>{description}</p></div>
      <hr />
      <br />
    </div>
  );
}
