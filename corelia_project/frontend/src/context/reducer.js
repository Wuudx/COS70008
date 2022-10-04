let auth_token = localStorage.getItem('auth_token') ?? null;
let user = JSON.parse(localStorage.getItem('user')) ?? null;

export const initialState = {
    user: null || user,
    token: null || auth_token,
    loading: false,
    error: null,
};

export const reducer = (initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                loading: false,
                error: null,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGIN_FAILURE':
            return {
                ...initialState,
                loading: false,
                error: action.payload.error,
            };
        case 'REQUEST_AUTHENTICATE':
            return {
                ...initialState,
                loading: true,
            };
        case 'AUTHENTICATE_SUCCESS':
            return {
                ...initialState,
                loading: false,
                error: null,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'AUTHENTICATE_FAILURE':
            return {
                ...initialState,
                loading: false,
                error:
                    action.payload.non_field_errors[0] ?? action.payload.error,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                user: null,
                token: null,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
