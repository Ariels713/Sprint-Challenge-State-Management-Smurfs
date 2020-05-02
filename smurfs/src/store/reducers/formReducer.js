const initialState = {
  isSubmitting:false,
  name: "",
  age: "",
  height: "",
  description:"",
  id: "",
};

export const formReducer = (state = initialState, action) => {

  switch (action.type) {
    case "TROLL_FORM_POST_REQUEST_START":
      return {
        ...state,
        isSubmitting: true,
      }
    case "TROLL_FORM_POST_SUCCESS":
      return {
        ...state,
        isSubmitting: false,

      }
    default:
      return state;
  }
};
