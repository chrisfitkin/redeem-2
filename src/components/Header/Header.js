import React from 'react'
import { IndexLink, Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import './Header.scss'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

  /*
  <AppBar
    title={<IndexLink to='/' activeClassName='route--active'>Home</IndexLink>}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  */

const HeaderMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);



export const Header = () => (
  <div>
    <AppBar
      title={"Redeem"}
      iconElementRight={<HeaderMenu />}
    />
    <IndexLink to='/' activeClassName='route--active'>Home</IndexLink>
    {' · '}
    <Link to='/brands' activeClassName='route--active'>
      Brands
    </Link>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
