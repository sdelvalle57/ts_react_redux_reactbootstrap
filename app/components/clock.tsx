import {Container} from 'react-bootstrap';



const Clock = ({ lastUpdate, light }: {lastUpdate: number, light: boolean}) => {
  return (

    <Container className= {light ? 'light clock' : 'clock'}>
      {format(new Date(lastUpdate))}
      
    </Container>
  )
}

export default Clock;

const format = (t: Date) => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = (n: number) => n < 10 ? `0${n}` : n
