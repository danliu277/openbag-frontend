let initialState = {
    top_three: [],
    plants: [],
    user: null
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETPLANTS': 
            return {...prevState, plants: action.plants}
        case 'SETUSER':
            return {...prevState, user: action.user}
        case 'SETTOPTHREE':
            return {...prevState, top_three: action.top_three}    
        default:
            return prevState
    }
}

export default reducer;