import actionTypes from "./action-types";
import {combineReducers} from "redux";

export function isNotificationView(state = false, action) {
    switch (action.type) {
      case actionTypes.SET_NOTIFICATION:
        return action.payload;
      default:
        return state
    }
}

export function games(state = [], action) {
  switch (action.type) {
    case actionTypes.SET_GAMES:
      return [...action.payload];
    default:
      return state
  }
}

export function isListView(state = true, action) {
  switch (action.type) {
    case actionTypes.SET_LIST_VIEW:
      return action.payload;
    default:
      return state
  }
}

export function isPopupView(state = false, action) {
  switch (action.type) {
    case actionTypes.SET_POPUP_VIEW:
      return action.payload;
    default:
      return state
  }
}


export function isLoading(state = false, action) {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return action.payload;
    default:
      return state
  }
}

export default combineReducers({ 
    isNotificationView, 
    games,
    isListView, 
    isPopupView,
    isLoading,
})