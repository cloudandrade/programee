
import { Typography } from '@mui/material';
import EventList from './components/EventList'
import Form from './components/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box1">
        <Typography
          style={{
            fontFamily: 'Alex Brush',
            fontSize: '38px',
            fontWeight: 'bold',
            backgroundColor: 'transparent'
          }}
        >
          Programee
        </Typography>
      </div>
      <div className="box1-5">
        <Typography
          style={{
            fontFamily: 'Alex Brush',
            fontSize: '18px',
            fontWeight: 'bold',

          }}
        >
          Calendário de atividades
        </Typography>
      </div>
      <Form />
      <EventList />
    </div>
  );
}

export default App;
