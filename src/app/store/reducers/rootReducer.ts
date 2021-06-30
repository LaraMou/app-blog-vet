
import { ActionReducerMap } from "@ngrx/store";
import { Action } from "../actions/action";
import { AppStore } from "../config/appStore";
import { messageReducer } from "./appReducer";

export const RootReducer: ActionReducerMap<AppStore, Action> = {

  messageState: messageReducer

}
