const intitialState={
    recipes:[],
    isLoading:false,
    error:''
}

export const reducer=(action,payload)=>{
    switch(action.type){
        case"START_FETCH":
            return state;
        case"FETCH_SUCCESS":
            return state;
        case"FETCH_FAIL":
            return {...state,
                error:action.payload
            }
        case"LOAD_RECIPES":
        //update state
            return state;
        case"SUBMIT_RECIPE":
        //update state 
            return state;
    }
};