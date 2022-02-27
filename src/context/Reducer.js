export const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_PHOTOS":
            return { ...state, arrPhotos: [...state.arrPhotos, ...action.item] }
        case "SET_COUNTER":
            return { ...state, counter: action.num }
        default:
            return state;
    }
}