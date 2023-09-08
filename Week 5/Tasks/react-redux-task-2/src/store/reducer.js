const INITAl_STATE={
    lang:"en",
    load:false
}

export default function Reducer(state=INITAl_STATE,action){
    switch(action.type){
        case "SET_LANG":
            return {...state,lang:action.payload }
            
            default: 
            return state
    }
}