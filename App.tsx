import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './app/Navigations/AuthStackNavigator';
import { AuthContext } from './app/AuthState/Context';
import { EAuthActionTypes } from './app/AuthState/ActionContants';
import { AuthReducer } from './app/AuthState/Reducer';
import { AuthStore, IAuthStore } from './app/AuthState/Store';
import MainStackNavigator from './app/Navigations/MainStackNavigator';

const App = () => {
  const [AuthState, dispatch] = useReducer(AuthReducer, AuthStore) as any;


  const AuthActions = useMemo(() => (
    {
      AuthData: AuthState as IAuthStore,
      Init: (authData: IAuthStore) => {
        dispatch({ type: EAuthActionTypes.Init, ...authData })
      },
      Login: (authData: IAuthStore) => {
        dispatch({ type: EAuthActionTypes.Login, ...authData })
      }
    }
  ), [AuthState]);


  useEffect(() => {
    console.log(AuthState);
  }, []);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={AuthActions as any}>
        {
          AuthState.isLoaded
            ? <MainStackNavigator />
            : <AuthStackNavigator />
        }
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
