const cal_state = {
    value : 0
}

export const reducer = (state = cal_state, action) =>{
    switch(action.type){
       case 'INSERT_DATA' :
            return { ...state, value: state.value == 0 ? action.data : state.value + action.data};
       case 'CLEAR':
            return { ...state, value : 0};
       case 'RESULT' : 
            return { ...state, value: eval(action.total_values) };        
       default: return state;
    }
}