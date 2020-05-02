import Axios from 'axios'

export const DETETE_TROLL_START = "DETETE_TROLL_START";
export const DELETE_TROLL_FAIL = "DELETE_TROLL_FAIL";
export const DELETE_TROLL_SUCESS = "DELETE_TROLL_SUCESS"

export const deteteTroll = (trollID) => {
    return (dispatch) => {
        // dispatch({type:DETETE_TROLL_START})
        Axios.delete(`http://localhost:3333/smurfs/${trollID}`)
        .then(res => console.log(res))
            // dispatch({type: DELETE_TROLL_SUCESS} )})
        .catch(err => console.log(err))
    };
};
