import React, { useState } from 'react';
import { Button, TextField, Grid, Select, InputLabel, MenuItem, FormControl, Typography, Stack } from '@mui/material';
import { Cancel, Add } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import './styles.css'; // Importe o arquivo de CSS
import dayjs from 'dayjs'


function Form() {
  const [formActive, setFormActive] = useState(false);
  const [classe, setClasse] = React.useState('');
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeSelected = (event) => {
    setClasse(event.target.value);
  };

  return (
    <div>
      <div className="add-event-button-area">
        <Button
          variant="contained"
          className="button"
          onClick={() => setFormActive(true)}
        >
          Adicionar evento
        </Button>

      </div>
      {formActive ? (

        <>
          <div className='title-area'>

            <Typography
              style={{
                fontFamily: 'Alex Brush',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: 'transparent'
              }}
            >
              Criação de evento
            </Typography>
          </div>
          <div id="form" className="box1">

            <Grid container spacing={2}>
              <Grid item xs={11} sm={6}>
                <TextField id="standard-basic" label="Nome da atividade" className="textField" />
              </Grid>
              <Grid item xs={11} sm={6}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Descrição da atividade"
                  multiline
                  maxRows={4}
                  className="textField"
                />
              </Grid>
              <Grid item xs={11} sm={6}>
                <FormControl className="formControl">
                  <InputLabel id="demo-simple-select-label">Organização</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={classe}
                    onChange={handleChangeSelected}
                  >
                    <MenuItem value={'Rapazes'}>Rapazes</MenuItem>
                    <MenuItem value={'Moças'}>Moças</MenuItem>
                    <MenuItem value={'Quórum'}>Quórum</MenuItem>
                    <MenuItem value={'Soc Soc'}>Soc Soc</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={11} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DateTimePicker
                      label="Data da atividade"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>

            </Grid>

          </div>
          <div className='buttons-area'>
            <Grid container >
              <Grid item xs={11} sm={6}>
                <Button variant="contained" color="inherit" startIcon={<Cancel />} onClick={() => setFormActive(false)} >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={11} sm={6}>
                <Button variant="contained" color="success" startIcon={<Add />}>
                  Adicionar
                </Button>
              </Grid>
            </ Grid>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Form;