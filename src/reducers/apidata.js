const initialState = {
    users : [],
    repos : []
};

const apiData = (state = initialState, payload) => {
    const {type, data} = payload;

    switch(type){
        case "users":
            return{
                ...state,
                users: data
            };
        case "repos":
            return{
                ...state,
                repos: data
            };
        default:
            return state
    }
}

export default apiData;