import Axios from 'axios'

export const FETCH_PEXEL_IMAGE_START = "FETCH_PEXEL_IMAGE_START";
export const FETCH_PEXEL_IMAGE_FAIL = "FETCH_PEXEL_IMAGE_FAIL";
export const FETCH_PEXEL_IMAGE_SUCCESS = "FETCH_PEXEL_IMAGE_SUCCESS";

export const FETCH_TROLL_DATA_START = "FETCH_TROLL_DATA_START";
export const FETCH_TROLL_DATA_FAIL = "FETCH_TROLL_DATA_FAIL";
export const FETCH_TROLL_DATA_SUCCESS = "FETCH_TROLL_DATA_SUCCESS"

export const trollCardActions = () => {
    return (dispatch) => {
        dispatch({type:FETCH_TROLL_DATA_START})
        Axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            dispatch({type: FETCH_TROLL_DATA_SUCCESS, payload: res.data} )})
        .catch(err => console.log(err))
    };
};
