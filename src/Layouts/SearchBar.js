import React from 'react'
import { Input } from 'semantic-ui-react'
import './searchBar.css'

export default function SearchBar() {
  return (
    <div class="searchBar">
      <div class="ui fluid action input">
        <input type="text" placeholder="Search..." />
        <button class="ui icon button">
          <i aria-hidden="true" class="search icon"></i>
        </button>
      </div>
    </div>
  )
}
