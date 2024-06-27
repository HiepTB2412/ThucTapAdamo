import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AppContext } from '../Context/AppContext';
import moment from 'moment-timezone';

const CardWeather = () => {

    const { address, currentConditions, description } = useContext(AppContext)

    function getCurrentDateForCity(city) {
        const timeZone = moment.tz.guess();
        const now = moment.tz(timeZone);
        const dayOfWeek = now.format('dddd');
        const day = now.format('D');
        const month = now.format('MMMM');
        const year = now.format('YYYY');

        return `${dayOfWeek}, ${day} ${month} ${year}`;
    }

    const dayCity = getCurrentDateForCity(address)

    return (
        <Card style={{ width: '22rem' }}>
            {
                currentConditions && currentConditions.icon ? (<Card.Img style={{ height: '150px', width: '150px', margin: "auto" }} variant="top" src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${currentConditions.icon}.png`} />) : (<p></p>)
            }
            <Card.Body>
                {currentConditions && currentConditions.temp ? (<Card.Title>{Math.round(((currentConditions.temp - 32) * 5) / 9)} ℃</Card.Title>) : (<Card.Title></Card.Title>)}
                <Card.Text>
                    <b>{address}</b>
                </Card.Text>
            </Card.Body>
            <div style={{ display: 'flex' }}>
                <div style={{ textAlign: 'start', paddingLeft: '10px' }}>
                    {dayCity}
                </div>
                <div style={{ paddingLeft: '105px' }}>
                    {currentConditions.datetime}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ backgroundColor: '#2361e8', margin: '10px 25px 10px 10px', padding: '15px 10px 0px 10px', textAlign: 'center', borderRadius: '8px', color: 'white' }}>
                    Wind Speed
                    <p>{currentConditions.windspeed} km/h</p>
                </div>
                <div style={{ backgroundColor: '#15a148', margin: '10px 10px 10px 25px', padding: '15px 10px 0px 10px', textAlign: 'center', borderRadius: '8px', color: 'white' }}>
                    Humidity
                    <p>{currentConditions.humidity} gm/m³</p>
                </div>
            </div>
            <div style={{ textAlign: 'start', paddingLeft: '10px' }}>
                Uv Index: {currentConditions.uvindex}
            </div>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{description}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default CardWeather;