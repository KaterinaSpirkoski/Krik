import { useState } from "react";

const Search = ({ setResults }: any) => {
  const [input, setInput] = useState("");
  const fetchData = (value: any) => {
    fetch(" http://localhost:5001/projectsData")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item: any) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: any) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <input
      type="search"
      value={input}
      placeholder="Search"
      className="search-bar"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
export default Search;
