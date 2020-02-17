import React, { useState } from 'react';
import styled from '@emotion/styled'
import { ResultsList } from './components/ResultsList'

const SearchStyle = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
input {
  width: 40%;
  padding: 10px;
  border-radius: 5px;
}
button {
  width: 100px;
  background: #4E598C;
  color: #fff;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
}
`

const Search = () => {
  const [searchValue, setSearchValue] = useState({
    inputValue: ''
  });

  const [searchResults, setSearchResults] = useState({
    meals: []
  });

  const handleOnChange = (event) => {
    setSearchValue({
      inputValue: event.target.value
    })
  };

  const handleSearch = () => {
    makeApiCall(searchValue.inputValue)
    setSearchValue({
      inputValue: ''
    })
  };

  const makeApiCall = searchInput => {
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setSearchResults({
          meals: jsonData.meals
        })
      });
  };

  return (
    <SearchStyle>
      <h1>Welcome to the meal search</h1>
      <input
        name="text"
        type="text"
        placeholder="Search..."
        onChange={event => handleOnChange(event)}
        value={searchValue.inputValue} />
      <button onClick={handleSearch}>Search</button>
      <ResultsList meals={searchResults.meals} />
    </SearchStyle >
  )
}

export default Search; 