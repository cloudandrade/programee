import { Typography } from '@material-ui/core';

import Lista from './components/Accordion';
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
      <Lista />
    </div>
  );
}

export default App;
