import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={props.handleSearch}
        value={props.search}
      />
    </div>
  )
}

export default Search
