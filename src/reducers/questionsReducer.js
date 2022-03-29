const questionsReducer = (state,{type,payload})=>{
    switch(type){
        case 'GET_QUESTIONS':
            return {...state,questions:payload}
        default:
            return state
    }
}
export {questionsReducer}