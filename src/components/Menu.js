import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from "../images/logo.png";
import Home from "./Home"


export default class MenuDefault extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={4}>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          component={Home}
          href="/"
          to="/"
        >
       <img src={logo}/>
        </Menu.Item>

        <Menu.Item
        name='reviews'
        active={activeItem === 'reviews'}
        onClick={this.handleItemClick}>
          <a href="https://github.com/katyvonkaty" target="_blank">  Github </a>
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          <a href="https://www.linkedin.com/in/katie-jordan-designer/"> Linkedin </a>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
        <a href = "mailto: kj0203@gmail.com.com">Contact Me</a>

        </Menu.Item>
      </Menu>
    )
  }
}
