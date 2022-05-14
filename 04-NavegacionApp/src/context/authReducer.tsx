import { AuthState } from "./AuthContext";

export type AuthAction = 
{
    type: "SIGN_IN";
    payload: {
        userName: string;
        favoriteIcon: string;
    };
} | 
{
    type: "SIGN_OUT";
} | 
{
    type: "UPDATE_FAVORITE_ICON";
    payload: {
        favoriteIcon: string;
    };
} |
{
    type: "UPDATE_USER_NAME";
    payload: {
        userName: string;
    };
}



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload.userName,
                favoriteIcon: action.payload.favoriteIcon
            }
        case "SIGN_OUT":
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case "UPDATE_FAVORITE_ICON":
            return {
                ...state,
                favoriteIcon: action.payload.favoriteIcon
            }
        case "UPDATE_USER_NAME":
            return {
                ...state,
                userName: action.payload.userName
            }
        default:
            return state;
    }

}