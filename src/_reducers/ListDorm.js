const initialState = {
    dorms : [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    isDone: false
}

export default ListDorm = (state = initialState, action) => {
    switch(action.type) {

        case 'ALL_DORM_PENDING':
            return {...state, isLoading: true, isSuccess: false, isError: false}
        case 'ALL_DORM_FULFILLED':
            return { ...state, isLoading: false, dorms: action.payload.data}
        case 'ALL_DORM_REJECTED':
            return { ...state, isLoading: false, isError: true }

        // Add Dorm
        case 'ADD_DORM_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'ADD_DORM_FULFILLED':
            return {
                ...state,
                dorms: action.payload.data,
                isLoading: false,
                isDone: true
            }
        case 'ADD_DORM_REJECTED':
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        
        case 'GET_DORM_SORT_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case 'GET_DORM_SORT-FULFILLED':
            return {
                ...state,
                dorms: action.payload.data,
                isLoading: false,
                isDone: true
            }
        
        case 'GET_DORM_SORT_REJECTED':
            return {
                ...state,
                isError: true,
                isLoading: false,
            }

        default:
        return state;
    }
}