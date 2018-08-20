/**
 * Statistic Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import './StatisticSegment.css'

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Icon, Segment, Card} from 'semantic-ui-react'

const mapStatistics = (statistic, key) => {
  const {iconName, header, description} = statistic;
  return (
    <Card key={key}>
      <Icon name={iconName} size='massive' fitted/>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  )
};

class StatisticSegment extends React.Component {

  render() {
    const {statistics} = this.props;
    return (
      <Container className="StatisticSegment" style={{margin: '8em 0 8em 0'}}>
        <Header as='h1' color='grey' size='huge'>Преимущества работы с нами</Header>
        {statistics && (
          <Card.Group style={{margin: '4em 0 4em 0'}}>
            {statistics.map(mapStatistics)}
          </Card.Group>
        )}
      </Container>
    )
  }
}
StatisticSegment.propTypes = {
  statistics : PropTypes.arrayOf(PropTypes.shape({
    iconName : PropTypes.string,
    header : PropTypes.string,
    description : PropTypes.string
  }))
};
export default StatisticSegment;
