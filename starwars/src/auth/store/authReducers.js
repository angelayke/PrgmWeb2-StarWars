const reducers = {
    updateEmail: (state, action) => {
        state.user = {
            ...state.user,
            // la propriété payload de l’argument action représente la donnée que nous passerons à l’action
            email: action.payload
        }
    },
    updateName: (state, action) => {
        state.user = { ...state.user, name: action.payload }
    },
    updateWholeUser: (state, action) => {
        // Création d'un faux ID pour les besoins
        const id = state.id + 1;
        state.user = { id: id, ...action.payload };
    }
}
export default reducers;