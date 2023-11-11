import React, { useEffect } from 'react';
import { useAuth } from 'oidc-react';


export const Logout = () => {
  const { signOutRedirect } = useAuth();

  useEffect(() => {
    (async () => {
      await signOutRedirect()
    })()
  }, []);

  return <div>Loading...</div>;
}
