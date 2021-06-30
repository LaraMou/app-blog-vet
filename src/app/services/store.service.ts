import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '../store/actions/action';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<any>) { }
  getState(state: string) {
    return this.store.select(state);
  }

  /**
   * Método que sirve para despachar acciones
   * El Reducer que las escuche, gestionará el STATE
   * @param action que despacha y será escuchada por el REDUCER
   */
  updateState(action: Action) {
    this.store.dispatch(action);
  }

}
