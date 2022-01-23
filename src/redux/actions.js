import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setNotification(value) {
  return {
    type: actionTypes.SET_NOTIFICATION,
    payload: value,
  };
}

export function setListView(value) {
  return {
    type: actionTypes.SET_LIST_VIEW,
    payload: value,
  };
}

export function setPopupView(value) {
  return {
    type: actionTypes.SET_POPUP_VIEW,
    payload: value,
  };
}

export function setGames(value) {
  return {
    type: actionTypes.SET_GAMES,
    payload: value,
  };
}

export function setLoading(value){
  return {
    type: actionTypes.SET_LOADING,
    payload: value,
  };
}

export function getGames(params) {
  
  return async (dispatch) => {
    try {
      axios
        .get(`${constants.baseUrl}`, {
          params: { ...params },
        })
        .then((response) => {
          let arr = [];
          arr = response.data.response.filter((x) => {
            if (params.props === undefined) return x;
            if (params.props.title === undefined && params.props.competition === undefined) return x;

            if (params.props.competition === x.competition && params.props.title === undefined ) return x;
            
            if (params.props.competition === x.competition && x.title.toLowerCase().includes(params.props.title.toLowerCase()) ) return x;

            if (params.props.competition === undefined && x.title.toLowerCase().includes(params.props.title.toLowerCase()) ) return x;

          });
          dispatch(setGames(arr));
          dispatch(setLoading(false))
        });
    } catch (error) {
      console.log(error);
    }
  };
}
