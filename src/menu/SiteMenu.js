/**
 * Site Menu
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Button, Menu, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {contacts} from "../data/company";

const renderMenuItem = (item, key, onItemSelected) => (
  <Menu.Item as={Link} to={item.link} key={key} onClick={onItemSelected && (() => onItemSelected(item.link, item))}>
    {item.label}
  </Menu.Item>
);

const SiteMenu = ({menu, fixed, inverted, homeLink, onMenuButtonClick, onItemSelected, vertical, style, showContacts}) => {
  return (
    <Menu fixed={fixed ? 'top' : undefined} size='huge' inverted={inverted} vertical={vertical} style={style}>
      {homeLink && (
        <Menu.Item>
          <Link to={homeLink}>
            <Icon name="lightbulb" inverted={inverted} size='large'/>
          </Link>
        </Menu.Item>
      )}
      {onMenuButtonClick && (
        <Button icon inverted={inverted} basic color='violet' onClick={onMenuButtonClick}>
          <Icon name="content" size='large'/>
        </Button>
      )}
      {menu && menu.map((item, key) => renderMenuItem(item, key, onItemSelected))}
      {showContacts && (
        <Menu.Item position="right">
          <a href={`tel:${contacts.phoneNumber}`}><Icon name='phone'/>{contacts.phoneNumber}</a>
          <a href={contacts.getDirectionUrl} style={{marginLeft: '2em'}}><Icon name='location arrow'/>Проложить маршрут</a>
        </Menu.Item>
      )}
    </Menu>
  )
};
SiteMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    label : PropTypes.string,
    link : PropTypes.string
  })),
  vertical: PropTypes.bool,
  fixed: PropTypes.bool,
  inverted: PropTypes.bool,
  homeLink: PropTypes.string,
  onMenuButtonClick: PropTypes.func,
  onItemSelected : PropTypes.func,
  style: PropTypes.object,
  showContacts: PropTypes.bool
};
export default SiteMenu;
