import React from 'react'
import { MenuItem, Menu, Segment, Container } from 'semantic-ui-react'
import './menuBar.css'
import SearchBar from './SearchBar'

export default function MenuBar() {
  return (
    <div>
      <Menu size='large'>
          <MenuItem
            name='Home'
          />
          <MenuItem
            name='Jobs'
          />
          <MenuItem
            name='Candidates'
          />
      </Menu>
    </div>
  )
}
