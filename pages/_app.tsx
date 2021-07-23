import React, { useReducer, useEffect } from "react"
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import AuthContext from "../lib/AuthContext"
import authReducer from "../lib/authReducer"
import { listenAuthState } from "../lib/firebase"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  )
  useEffect(() => {
    return listenAuthState(dispatch)
  }, [])
  return (
    <AuthContext.Provider value={state}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContext.Provider>
  )
}
