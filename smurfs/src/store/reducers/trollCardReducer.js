const initialState = {
    isLoading:false,
    trollImage:"",
    imageAlt:"",
    name:"",
    age:"",
    height:""
}

export const trollCardReducer = (state = initialState, action) => {

    switch(action.type){
        case "FETCH_TROLL_DATA_START" :
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_TROLL_DATA_SUCCESS" :
            return {
                ...state,
                isLoading: false,
                name:[action.payload.map((item) => {
                    return item.name
                })],
                height:[action.payload.map((item) => {
                   return  item.height
                })],
                age:[action.payload.map((item) => {
                    return  item.height
                 })],
            }
        default:
            return state
    }
}