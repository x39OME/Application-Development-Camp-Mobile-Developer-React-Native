const INITAL_STATE={
    lang:"en"
}

export default function LangReducer(state=INITAL_STATE,action){
    switch(action.type)
    {
        case "SET_LANG":
            return {...state,lang:action.payload}
            default:
                return state
    }

}