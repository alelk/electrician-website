/**
 * Header Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import './HeaderSegment.css'

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Visibility, Header, Icon, Segment, Button} from 'semantic-ui-react'

class HeaderSegment extends React.Component {

  render() {
    const {menu, phoneNumber, onHeaderVisible, onHeaderHide} = this.props;
    return (
      <Segment className="HeaderSegment" inverted textAlign="center"
               style={{minHeight: 900, padding: '1em 0'}}>
        <div className="headerFilter"/>
        <Visibility onBottomPassed={onHeaderHide} onBottomVisible={onHeaderVisible} once={false}>
          {menu && <Container>{menu}</Container>}
          <Container text className='companyInfo'>
            <Header as='h1' content="Услуги электромонтажа" inverted style={{fontSize: '3em'}}/>
            <Header as='h2' content="пгт. Кикнур" inverted/>
            <Header as='a' inverted style={{marginTop: '2em'}} href={`tel:${phoneNumber}`}>
              <Icon name='phone'/>{phoneNumber}
            </Header>
            <Button as='a' color='yellow' size='huge' basic href={`tel:${phoneNumber}`}>
              Позвоните прямо сейчас и получите замер, консультацию и составление сметы в подарок.
            </Button>
          </Container>
        </Visibility>
      </Segment>
    )
  }
}
HeaderSegment.propTypes = {
  menu : PropTypes.object,
  companyName : PropTypes.string,
  companyLocation : PropTypes.string,
  phoneNumber : PropTypes.string,
  onHeaderVisible: PropTypes.func,
  onHeaderHide: PropTypes.func
};
export default HeaderSegment;
