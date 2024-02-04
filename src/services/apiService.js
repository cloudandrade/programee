import axios from 'axios';
const URLAPI = process.env.REACT_APP_PROGRAMEE_API_HOST;

const api = axios.create({
  baseURL: URLAPI,
});

export default api;

export function getEvents() {
  return api.get('eventos');
}

export function postEvent(event) {
  const body = event
  return api.post('evento', body);
}

export function updateItem(obj) {
  const id = obj._id;
  const body = {
    id: obj.id,
    nome: obj.nome,
    checked: obj.checked,
  };

  return api.put(`evento/${id}`, body);
}
