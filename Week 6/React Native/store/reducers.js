const INTIAL_STATE={
    counter:0
}

export default function Reducer(state=INTIAL_STATE,action)
{
    switch(action.type){
        case "SET_COUNTER":
            return {...state,counter:action.payload};
            default:
                return state;
    }
}