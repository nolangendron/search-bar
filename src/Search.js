import React from 'react';
import styled from '@emotion/styled'

const SearchStyle = styled('div')`
button {
  cursor: pointer;
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