const INITAL_STATE={
    load:false
}

export default function LoadReducer(state=INITAL_STATE,action){
    switch(action.type)
    {
        case "SET_LOAD":
            return {...state,load:action.payload}
            default:
                return state;
    }

}