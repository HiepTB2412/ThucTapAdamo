import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AppContext } from '../Context/AppContext';

const CardWeatherHour = (props) => {

    const { days } = useContext(AppContext)

    return (
        <>
            {days && days.map((i, index) => (
                <Card style={{ width: '10rem', margin: '15px' }} key={index}>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{i.datetime}</ListGroup.Item>
                    </ListGroup>
                    <Card.Img style={{ maxHeight: '154px' }} variant="top" src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${i.icon}.png`} />
                    <Card.Body>
                        <Card.Title>{Math.round(((i.temp - 32) * 5) / 9)} ℃</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default CardWeatherHour;