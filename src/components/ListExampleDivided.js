import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleDivided = (props) => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name={props.icon} size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{props.header}</List.Header>
        <List.Description as='a'>{props.content}</List.Description>
      </List.Content>
    </List.Item>
    <hr style={{border:".5px solid black"}}/>

  </List>
)

export default ListExampleDivided
