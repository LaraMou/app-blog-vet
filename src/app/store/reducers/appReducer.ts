import { Action } from "../actions/action";
import { ACTION_CAMBIO_MENSAJE, ACTION_CAMBIO_VALOR } from "../actions/actions.type";

import MessageState from "../config/messageState";

// Estado inicial para el Reducer
// Sirve para que cuando se inicie la aplicación,
// El Store tenga unos datos iniciales
// Usamos la Interface para el Estado
const initialState: MessageState = {
  mensaje: 'Mensaje por defecto',
  valor: false,
}


// Creamos una función pura que será el reducer
export function messageReducer(state = initialState, action: Action): MessageState {
  switch (action.type) {
    case ACTION_CAMBIO_MENSAJE:
      return {
        ...state, // Replicamos el estado inicial (... te devuelve todos los elementos de state)
        mensaje: action.payload // modificamos únicamente la clave mensaje
      }
    case ACTION_CAMBIO_VALOR:
      return {
        ...state,
        valor: action.payload
      }
  }

  // En caso de que no entre en por estos tipos de mensajes, tenemos que
  // devolver el estado sin tocarlo
  return state;
}
