import React, { createContext } from "react";

const AuthContext = createContext({ // context 초기값
    isLoggedIn: false
})

export default AuthContext;