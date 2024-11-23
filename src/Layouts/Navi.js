import React from 'react'
import Menu from './MenuBar'
import MenuBar from './MenuBar'
import { Grid, GridColumn, GridRow, Header, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import './navi.css'
import Login from './Login'
import Register from './Register'

export default function Navi() {
  return (
    <div>
      <Segment>
        <Grid>
          <GridRow centered>
            <GridColumn>
            <Header as='h1'>HRMS</Header>
            </GridColumn>
            <GridColumn width={6}>
            <SearchBar/>
            </GridColumn>
            <GridColumn width={2}>
                <div>
                  <Login/>
                  <Register/>
                </div>
            </GridColumn>
          </GridRow>
          <GridRow centered>
            <MenuBar />
          </GridRow>
        </Grid>

      </Segment>


    </div>
  )
}
