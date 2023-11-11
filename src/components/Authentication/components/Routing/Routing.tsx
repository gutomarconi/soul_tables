import React, { FC, ReactNode } from 'react';
import { useAuth } from 'oidc-react';
import { Route, Switch } from 'react-router-dom';
import { CALLBACK_PATH, LOGOUT_PATH } from '../../constants';
import { LoginComplete } from '../LoginComplete';
import { Logout } from '../Logout';

export interface IRoutingProps {
  children: ReactNode
}

export const Routing: FC<IRoutingProps> = ({ children }) => {
  const { isLoading } = useAuth()

  return (
    <Switch>
      {/* TODO: Remove ignores once problems solved with types on react-router-dom (AS) */}
      {/* @ts-ignore */}
      <Route path={CALLBACK_PATH} component={LoginComplete} />
      {/* @ts-ignore */}
      <Route path={LOGOUT_PATH} component={Logout} />
      <Route path="/">{!isLoading && children}</Route>
    </Switch>
  );
};
