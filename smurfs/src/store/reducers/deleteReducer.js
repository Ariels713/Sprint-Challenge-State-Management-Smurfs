const initialState = {
    id:"",
    isDeleting:false
}

export const deleteReducer = (state = initialState, action) => {
    switch(action.type) {
        case "DETETE_TROLL_START":
            return {
                ...state,
                isDeleting: true
            }
        case "DELETE_TROLL_SUCESS":
            return {
                ...state,
                isDeleting:false,
                id:""
            }
        default :
            return state
    }
}