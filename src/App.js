import { Typography, Button } from '@material-ui/core';

import Lista from './components/Accordion';

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
      <div className="box1">
        <Button variant="contained" style={{
          width: '95%',
          height: '50px',
          marginBottom: '10px',
          backgroundColor: '#57e498'
        }}>Adicionar evento</Button>
      </div>
      <Lista />
    </div>
  );
}

export default App;
