import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';

const initialState = {
    user: null,
    isFetching: false,
    error: false,
}

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return(
        <AuthContext.Provider
          value={{ 
            user: state.user,
            isFetching: state.error,
            error: state.error,
            dispatch
          }}
        >
          {/* app */}
          {children}
        </AuthContext.Provider>
    )
}
