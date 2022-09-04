import React, { useState } from "react";
import UserData from "./Data.json";

const SearchField = ({ setFilterSearch, filterSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    const searchItem = e.target.value;
    const newFilterItem = UserData.filter((value) => {
      return value.title.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (searchItem === "") {
      setFilterSearch([]);
    } else {
      setFilterSearch(newFilterItem);
    }
    setInputValue(searchItem);
  };

  const clearInputField = () => {
    setInputValue('')
    setFilterSearch([]);
  }

  return (
    <div>
      <form>
        <div className="search-field d-flex align-items-center justify-content-between">
          <input
            className="input-field"
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={onInputChange}
            data={UserData}
          />
          <div>
            {filterSearch.length === 0 ? (
              <i class="fa fa-search" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-times clear-input" aria-hidden="true" onClick={clearInputField}></i>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
