const initialState = {
    dorms : [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

export default ListDorm = (state = initialState, action) => {
    switch(action.type) {

        case 'ALL_DORM_PENDING':
            return {...state, isLoading: true, isSuccess: false, isError: false}
        case 'ALL_DORM_FULFILLED':
            return { ...state, isLoading: false, dorms: action.payload.data}
        case 'ALL_DORM_REJECTED':
            return { ...state, isLoading: false, isError: true }

        default:
        return state;
    }
}