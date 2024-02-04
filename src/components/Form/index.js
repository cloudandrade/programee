import React, { useState } from 'react';
import { Button, TextField, Grid, Select, InputLabel, MenuItem, FormControl, Typography, Stack } from '@mui/material';
import { Cancel, Add } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { postEvent } from '../../services/apiService';
import './styles.css'; // Importe o arquivo de CSS
import dayjs from 'dayjs';

function Form() {
  const [formActive, setFormActive] = useState(false);
  const opcoes = [
    { id: 1, className: 'Soc Soc' },
    { id: 2, className: 'Quórum' },
    { id: 3, className: 'Primária' },
    { id: 4, className: 'Rapazes' },
    { id: 5, className: 'Moças' },
    { id: 6, className: 'Jas' },
    { id: 11, className: 'Mas' },
    { id: 7, className: 'Obra Missionária' },
    { id: 8, className: 'ORM' },
    { id: 9, className: 'Quorum & SS' },
    { id: 12, className: 'Jas & Mas' },
    { id: 10, className: 'Ala' }
  ];

  // variáveis dos campos
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [dateTime, setDateTime] = React.useState(dayjs());
  const [classe, setClasse] = React.useState(0);

  const handleChangeDate = (newDate) => {
    setDateTime(newDate);
  };

  const handleChangeSelected = (event) => {
    setClasse(event.target.value);
  };

  const handleCancel = () => {
    // Lógica para cancelar
  };

  const handleAdd = async () => {
    const classeSelecionada = opcoes.find((opcao) => opcao.id === classe);

    const dateParsed = dayjs(dateTime).format('YYYY-MM-DD');
    const hourParsed = dayjs(dateTime).hour();
    const minuteParsed = dayjs(dateTime).minute();
    const timeParsed = `${hourParsed}:${minuteParsed}`;

    const event = {
      titulo: title,
      classe: classeSelecionada.className,
      classeId: classeSelecionada.id,
      descricao: description,
      data: dateParsed
    };

    console.log("POST ", JSON.stringify(event));
    console.log("hora da atividade", timeParsed);

    await postEvent(event)
      .then((response) => {
        setFormActive(false);
        console.log(response)
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="add-event-button-area">
        <Button
          variant="contained"
          className="button"
          onClick={() => setFormActive(true)}
        >
          Registrar Atividade
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
              Criação da Atividade
            </Typography>
          </div>
          <div id="form" className="box1">
            <Grid container spacing={2}>
              <Grid item xs={11} sm={6}>
                <TextField id="title" label="Nome da atividade" className="textField" onBlur={(e) => setTitle(e.target.value)} />
              </Grid>
              <Grid item xs={11} sm={6}>
                <TextField
                  id="description"
                  label="Descrição da atividade"
                  multiline
                  maxRows={4}
                  className="textField"
                  onBlur={(e) => setDescription(e.target.value)}
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
                    {opcoes.map((opcao) => (
                      <MenuItem key={opcao.id} value={opcao.id}>
                        {opcao.className}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={11} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DateTimePicker
                      label="Data / Hora da atividade"
                      value={dateTime}
                      onChange={handleChangeDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
            </Grid>
          </div>
          <div className='buttons-area'>
            <Grid container>
              <Grid item xs={11} sm={6}>
                <Button variant="contained" color="inherit" startIcon={<Cancel />} onClick={() => setFormActive(false)} >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={11} sm={6}>
                <Button variant="contained" color="success" startIcon={<Add />} onClick={() => handleAdd()} >
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Form;