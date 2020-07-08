let initialState = {
    user: null,
    games: []
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETUSER':
            return { ...prevState, user: action.user }
        case 'SETGAMES':
            return { ...prevState, games: action.games }
        default:
            return prevState
    }
}

export default reducer;