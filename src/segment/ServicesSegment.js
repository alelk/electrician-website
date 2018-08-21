/**
 * Services Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import './ServicesSegment.css'

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Card, Image} from 'semantic-ui-react'

const mapService = (service, key) => (
    <Card key={key}>
        <Image src={service.img}/>
        <Card.Content>
            <Card.Header>{service.label}</Card.Header>
        </Card.Content>
    </Card>
);

class ServicesSegment extends React.Component {

    render() {
        const {services} = this.props;
        return (
            <Container textAlign='center' className="ServicesSegment" style={{margin: '8em 0 8em 0'}}>
                <Header as='h1'>Наши услуги</Header>
                <Container textAlign="center">
                    <Card.Group style={{margin: '4em 0 4em 0'}}>
                        {services && services.map(mapService)}
                    </Card.Group>
                </Container>
            </Container>
        )
    }
}
ServicesSegment.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        img: PropTypes.string
    }))
};
export default ServicesSegment;