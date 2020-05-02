const initialState = {
    isLoading:false,
    trollImage:"",
    imageAlt:"",
    trollName:"",
    trollAge:"",
    trollHeight:""
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
                // trollName: action.payload[0].name,
                trollName:[action.payload.map((item) => {
                    return item.name
                })],
                trollHeight:[action.payload.map((item) => {
                   return  item.height
                })],
                trollAge:[action.payload.map((item) => {
                    return  item.height
                 })],
            }
        default:
            return state
    }
}