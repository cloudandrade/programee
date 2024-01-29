import React, { useState } from 'react';
import { Button, TextField, Grid, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Form() {
  const classes = useStyles();
  const [formActive, setFormActive] = useState(false)
  const [classe, setClasse] = React.useState('');

  const handleChange = (event) => {
    setClasse(event.target.value);
  };

  return (
    <div>
      <div className="box1">
        <Button variant="contained" style={{
          width: '95%',
          height: '50px',
          marginBottom: '10px',
          backgroundColor: '#57e498'
        }}
          onClick={() => setFormActive(true)}
        >Adicionar evento</Button>
      </div>
      {formActive ? (
        <div style={{ marginRight: '3%', marginLeft: '3%', background: '#ffffff' }}>
          <h5>Criação de Evento</h5>
          <Grid container justifyContent="space-around">
            <TextField id="standard-basic" label="Nome da atividade" />
            <TextField
              id="standard-multiline-flexible"
              label="Descrição da atividade"
              multiline
              maxRows={4}
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Organização</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={classe}
                onChange={handleChange}
              >
                <MenuItem value={'Rapazes'}>Rapazes</MenuItem>
                <MenuItem value={'Moças'}>Moças</MenuItem>
                <MenuItem value={'Quórum'}>Quórum</MenuItem>
                <MenuItem value={'Soc Soc'}>Soc Soc</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="date"
              label="Data da atividade"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button onClick={() => setFormActive(false)}>Close</Button>
          </ Grid>
        </div>
      ) : (
        <></>
      )}

    </div>
  );
}

export default Form;