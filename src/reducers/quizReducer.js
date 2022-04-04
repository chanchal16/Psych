const quizReducer = (state,{type,payload})=>{
    switch(type){
        case 'GET_QUESTIONS':
            return {...state,questions:payload};
        case 'GET_INDEX':
            return {
                ...state,
                selectedOption:'',
                index:state.index < 9 && state.index +1,
                results:[...state.results,{ques:payload?.ques,answer:payload?.answer}]
            };
        case 'GET_SCORE':
            return {
                ...state,
                selectedOption:payload,
                score:payload === state.questions[state.index]?.correct_answer ? state.score + 10 :state.score
            };
        case 'GET_RESULTS':
            return{...state, results:[...state.results,{ques:payload?.ques,answer:payload?.answer}]}
        default:
            return state
    }
}
export {quizReducer}