import { Usuario } from '../../interfaces/appInterfaces';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'notAuthenticated';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction = 
    | { type: 'SIGN_UP', payload: { token: string, user:Usuario } }
    | { type: 'ADD_ERROR', payload: string }
    | { type: 'REMOVE_ERROR' }
    | { type: 'NOT_AUTH' }
    | { type: 'LOG_OUT' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                status: 'authenticated',
                errorMessage: ''
            }
        case 'ADD_ERROR':
            return {
                ...state,
                user:null,
                status: 'notAuthenticated',
                token: null,
                errorMessage: action.payload
            }
        case 'REMOVE_ERROR':
            return {
                ...state,
                errorMessage: ''
            }
        case 'LOG_OUT':
        case 'NOT_AUTH':
            return {
                ...state,
                status: 'notAuthenticated',
                token: null,
                user: null
            }
        default:
            return state;
    }
}