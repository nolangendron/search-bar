import React from 'react';
import styled from '@emotion/styled'

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
  return (
    <SearchStyle>
      <h1>Welcome to the meal search</h1>
      <input name="text" type="text" placeholder="Search..." />
      <button>Search</button>
    </SearchStyle>
  )
}

export default Search; 