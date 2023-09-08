const INITAl_STATE={
    articles:[]
}


export default function articlesReducer(state=INITAl_STATE,action){
    switch(action.type){
case "SET_ARTICLES":
    return {...state,articles:action.payload}

        default:
            return state;
    }

}