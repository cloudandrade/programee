import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import { getEvents } from '../../services/apiService';

import './styles.css';

export default function EventList() {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLista([]);
    await getEvents()
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function formatDate(dataString) {
    // Cria um objeto de data a partir da string
    const data = new Date(dataString);

    // Obtém o dia, mês e ano
    const dia = String(data.getUTCDate()).padStart(2, '0');
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
    const ano = data.getUTCFullYear();

    // Formata a data no estilo desejado
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
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
      case 8:
        css.borderTop = '5px solid linear-gradient(90deg, rgba(23,162,243,1) 0%, rgba(146,125,240,1) 50%, rgba(250,94,237,1) 100%)'
        break;
      case 9:
        css.borderTop = '5px solid linear-gradient(90deg, rgba(210,0,26,1) 0%, rgba(116,98,255,1) 50%)'
        break;
      case 10:
        css.borderTop = '5px solid #74737d'
        break;
      case 11:
        css.borderTop = '5px solid #324a19'
        break;
      case 12:
        css.borderTop = '5px solid linear-gradient(90deg, rgba(34,172,0,1) 0%, rgba(50,74,25,1) 50%)'
        break
      default:
        css.borderTop = '#ffffff'
        break;
    }

    return css
  }

  return (
    <div className='containerMargin' >
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
                      {formatDate(item.data)}
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