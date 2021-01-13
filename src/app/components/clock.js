import {Container} from 'react-bootstrap';

const Clock = ({ lastUpdate, light }) => {
  return (

    <Container className= {light ? 'light clock' : 'clock'}>
      {format(new Date(lastUpdate))}
      
    </Container>
  )
}

export default Clock;

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => n < 10 ? `0${n}` : n
