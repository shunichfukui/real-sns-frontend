import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';

const initialState = {
    user: {
      _id: "62d0ad02d6f0c8f54af15b5c",
      username: "トーマス",
      email: "fukui@gmail.com",
      password: "35783578a",
      profilePicture: "",
      coverPicture: "",
      followers: [],
      followings: [],
      isAdmin: false,
    },
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
