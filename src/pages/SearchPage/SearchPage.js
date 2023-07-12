import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import { getApi } from "../../api/googleSearchApi";
import { Spinner } from "react-bootstrap";
import SearchResults from "../../components/SearchResults/SearchResults";

export default function SearchPage() {
  const [results, setResults] = useState(null);
  const [state, setState] = useState("");
  const inputChange = (e) => {
    setState(e);
  };
  const location = useLocation();
  // console.log(location.search)
  const searchInput = new URLSearchParams(location.search).get("query");
  // console.log(searchInput)
  const getSearchResult = async () => {
    try {
      const results = await getApi(searchInput);
      setResults(results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSearchResult();
  }, []);
  return (
    <div className=" d-flex justify-content-center align-items-center my-3 m-2 flex-column">
      <div className="mt-3">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google image"
          width="200px"
        />
      </div>
      <div className="mb-3">
        <SearchBar searchInput={searchInput} inputChange={inputChange} />
      </div>
      <div className="mt-3">
        <hr />
        {!results && <Spinner />}
        {results && <SearchResults results={results} />}
      </div>
    </div>
  );
}
