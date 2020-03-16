import {
  LOADING_STATE,
  MEMBER_FETCH_SUCCESS,
  MEMBER_FETCH_ERROR
} from "../actions/api";

import { IApiState } from "../model/Members";

export const defaultState: IApiState = {
  members: [],
  isLoading: true,
  error: null
};

const apiState = (state = defaultState, action: any): IApiState => {
  switch (action.type) {
    case LOADING_STATE:
      return {
        ...state,
        isLoading: true
      };
    case MEMBER_FETCH_SUCCESS:
      return {
        ...state,
        members: action.members,
        isLoading: false
      };
    case MEMBER_FETCH_ERROR:
      return {
        ...state,
        members: [],
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};


export default {
  apiState,
};



