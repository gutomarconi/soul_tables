import React, { FC, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider, UserManager } from 'oidc-react';
import { UserManagerSettings } from 'oidc-client-ts';
import { REDIRECT_KEY, CALLBACK_PATH } from './constants';
import { Routing } from './components';

interface IAuthenticatedAppWrapperProps {
  children?: ReactNode;
  oidcSettings: UserManagerSettings;
}

export const AuthenticatedApp: FC<IAuthenticatedAppWrapperProps> = ({ children, oidcSettings}) => {
  const pathname = window.location.pathname;

  // @ts-ignore
  const userManager = new UserManager(oidcSettings);

  userManager.startSilentRenew()

  useEffect(() => {
    console.log(pathname);
    if (window && pathname !== CALLBACK_PATH) {
      window.localStorage.setItem(REDIRECT_KEY, pathname);
    }
  }, [])

  return (
    <AuthProvider {...oidcSettings} userManager={userManager} responseType="token id_token" scope="profile openid">
      <Routing>
        {children}
      </Routing>
    </AuthProvider>
    
  )
}
