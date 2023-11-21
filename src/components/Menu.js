// import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'
// import logo from "../images/logo.png";
// import Home from "./Home"


// export default class MenuDefault extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu fluid widths={4}>
//         <Menu.Item
//           name='editorials'
//           active={activeItem === 'editorials'}
//           onClick={this.handleItemClick}
//           component={Home}
//           href="/"
//           to="/"
//         >
//        <img src={logo}/>
//         </Menu.Item>

//         <Menu.Item
//         name='reviews'
//         active={activeItem === 'reviews'}
//         onClick={this.handleItemClick}>
//           <a href="https://github.com/y2katie" target="_blank">  Github </a>
//         </Menu.Item>

//         <Menu.Item
//           name='reviews'
//           active={activeItem === 'reviews'}
//           onClick={this.handleItemClick}
//         >
//           <a href="https://www.linkedin.com/in/y2katie/"  target="_blank"> Linkedin </a>
//         </Menu.Item>

//         <Menu.Item
//           name='upcomingEvents'
//           active={activeItem === 'upcomingEvents'}
//           onClick={this.handleItemClick}
//         >
//         <a href = "mailto: kj0203@gmail.com.com">Contact Me</a>

//         </Menu.Item>
//       </Menu>
//     )
//   }
// }


import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'

export default class MenuDefault extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' borderless>
        <Menu.Menu position='left'>

          <Menu.Item header>Katie Jordan</Menu.Item>

        </Menu.Menu>


        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Menu position='right'>
       
              <Menu.Item
                name='Articles'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              <Icon circular link name='github' />

              <Icon circular name='linkedin' />

        </Menu.Menu>

      </Menu>
    )
  }
}
