import { Dispatch } from "redux";
import Api from "../utils/Api";

export const LOADING_STATE = "LOADING_STATE";
export const MEMBER_FETCH_SUCCESS = "MEMBER_FETCH_SUCCESS";
export const MEMBER_FETCH_ERROR = "MEMBER_FETCH_ERROR";

// Example async action creator.
export const fetchMembers = () => async (dispatch: Dispatch) => {
  // Conditionally modify state based on payload response
  try {
    // According to reducer will put global state into loading state
    dispatch({
      type: "LOADING_STATE"
    });
    const response = await Api.getMembersLists();
    const membersData = response.data
    console.log(membersData)
    return dispatch({
      type: "MEMBER_FETCH_SUCCESS",
      members: membersData
    });
  } catch (error) {
    console.error(error);
    return dispatch({
      type: "MEMBER_FETCH_ERROR",
      error
    });
  }
};
