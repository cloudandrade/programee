import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useEffect, useState } from 'react';
import listaMock from '../../ListaChaCasaMock.json'

/* import { getAll, updateItem } from '../../service/requestService'; */

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0.8,
    width: '99%',

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const [lista, setLista] = useState([]);

  const [nome, setNome] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLista([]);
    setLista(listaMock);
    console.log(JSON.stringify(listaMock))
    /* getAll()
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); */
  }

  function handleAssinar(item) {
    if (nome.length > 2) {
      item.nome = nome;
      item.checked = true;

      /* updateItem(item)
        .then((response) => {
          console.log(response);
          fetchData();
        })
        .catch((error) => {
          console.error(error);
        }); */
    } else {
      alert('É necessário digitar um nome antes de assinar!');
    }
  }

  function handleClasseStyleSelector(classeId) {
    let css = { width: '96%', backgroundColor: '#ffffff' };
    switch (classeId) {
      case 1:
        css.borderTop = '5px solid #d2001a'
        break;
      case 2:
        css.borderTop = '5px solid #7462ff'
        break;
      case 3:
        css.borderTop = '5px solid #ffe70e'
        break;
      case 4:
        css.borderTop = '5px solid #17a2f3'
        break;
      case 5:
        css.borderTop = '5px solid #fa5eed'
        break;
      case 6:
        css.borderTop = '5px solid #22ac00'
        break;
      case 7:
        css.borderTop = '5px solid #f0ff99'
        break;
      default:
        css.borderTop = '#ffffff'
        break;
    }

    return css
  }

  return (
    <div className={classes.root}>
      {lista.length === 0 ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress style={{ color: '#ffed7a' }} />
        </div>
      ) : (
        lista.map(function (item, index) {
          return (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '5px',
              width: '100%',

            }}>
              <Accordion className="accordion" key={item.id} style={handleClasseStyleSelector(item.classeId)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="center-div">
                    <Typography
                      style={{ marginTop: '5px', marginLeft: '5px', fontSize: 12 }}
                    >
                      {item.data}
                    </Typography>
                    <Typography
                      style={{ marginTop: '5px', marginLeft: '25px', fontSize: 16 }}
                    >
                      {item.titulo}
                    </Typography>
                    <Typography
                      style={{ marginTop: '5px', marginLeft: '5px', fontSize: 10, fontStyle: 'italic' }}
                    >
                      {item.classe}
                    </Typography>

                  </div>



                </AccordionSummary>
                <AccordionDetails
                  style={
                    { backgroundColor: '#ffffff' }
                  }
                >
                  {/**Aqui é validado se o check é true ou não */
                  /** se o
									check for false exibirá o campo para preencher o nome e
									botao */
                  /** se o check for true exibira o nome de quem
									assinou */}
                  {(
                    <div className="center-div">
                      <Typography
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginLeft: '10px',
                        }}
                      >
                        Descrição:
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 16,
                          marginLeft: '5px',
                        }}
                      >
                        {item.descricao}
                      </Typography>
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })
      )}
    </div>
  );
}
