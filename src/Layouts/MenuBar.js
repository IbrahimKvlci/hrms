import React from 'react'
import { MenuItem, Menu, Segment } from 'semantic-ui-react'

export default function MenuBar() {
  return (
    <div>
        <Segment inverted>
        <Menu inverted pointing secondary>
          <MenuItem
            name='home'
          />
          <MenuItem
            name='messages'
          />
          <MenuItem
            name='friends'
          />
        </Menu>
      </Segment>
    </div>
  )
}
