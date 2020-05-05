import Axios from 'axios';

export const TROLL_FORM_POST_REQUEST_START = "TROLL_FORM_POST_REQUEST_START";
export const TROLL_FORM_POST_FAIL = "TROLL_FORM_POST_FAIL";
export const TROLL_FORM_POST_SUCCESS = "TROLL_FORM_POST_SUCCESS";

export const FETCH_PEXEL_IMAGE_START = "FETCH_PEXEL_IMAGE_START";
export const FETCH_PEXEL_IMAGE_FAIL = "FETCH_PEXEL_IMAGE_FAIL";
export const FETCH_PEXEL_IMAGE_SUCCESS = "FETCH_PEXEL_IMAGE_SUCCESS"

export const trollsPostAction = (formData) => {
    return (dispatch) => {
        dispatch({type:TROLL_FORM_POST_REQUEST_START})
        Axios.post('http://localhost:3333/smurfs',{
          name:formData.name,
          age:formData.age,
          height:formData.height,
          description:formData.description,
          id:Math.random()  
        })
        .then(res => console.log(res))
        .then(res => {
            dispatch({type:TROLL_FORM_POST_SUCCESS, payload:formData})
        })
        
        .catch(err => console.log(err))
    }
}