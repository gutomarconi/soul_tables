import React, { FC } from 'react';
import { useAuth } from 'oidc-react';
import { Redirect } from 'react-router-dom';
import { REDIRECT_KEY } from '../../constants';
import { getRedirect } from '../../utils'
import { UserProfile } from 'oidc-client-ts';


export const LoginComplete: FC = () => {
  const { isLoading } = useAuth()

  if (isLoading) return <></>;
  const storedRedirect = localStorage.getItem(REDIRECT_KEY);
  const redirect = getRedirect(storedRedirect);

  return (
    <Redirect to={redirect} />
  )
};
