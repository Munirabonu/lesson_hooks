const reducer =(state, {}) => {
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                currentUser:action.user
    }
    
        default:
            return state
    }
}