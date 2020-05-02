import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

function HeaderMenu() {
    return (
        <Menu size='massive'>
        <Menu.Item
          name='home'
        //   active={activeItem === 'home'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
        //   active={activeItem === 'messages'}
        //   onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default HeaderMenu
