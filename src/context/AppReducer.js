export default (state,action) =>{
    switch(action.type) {
        case 'DELETE_TRANACTION':
            return {
                ...state,
                transactions:state.transactions.filter(trans=>trans.id!==action.payload)
            }

        case 'ADD_TRANACTION':
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
            
        default:
            return state;
    } 
} 