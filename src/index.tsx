import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserManagerSettings, WebStorageStateStore } from 'oidc-client-ts';
import { App } from './app';

// const OIDC_SETTINGS: UserManagerSettings = {
//   authority: process.env.AUTHORITY_PROVIDER ?? '',
//   client_id: process.env.AUTH_PROVIDER_CLIENT_ID ?? '',
//   redirect_uri: process.env.AUTH_REDIRECT_URI ?? '',
//   automaticSilentRenew: true,
//   loadUserInfo: false,
//   includeIdTokenInSilentRenew: true,
//   revokeTokensOnSignout: false,
//   metadata: {
//     issuer: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_ID}}`,
//     jwks_uri: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_ID}/discovery/keys`,
//     end_session_endpoint: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_ID}/oauth2/logout`,
//     authorization_endpoint: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_ID}/oauth2/authorize`,
//     token_endpoint: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_ID}/oauth2/token`,
//   },
//   userStore: new WebStorageStateStore({
//     prefix: 'chatbot_',
//     store: window.localStorage
//   }),
//   extraQueryParams: {  },
// };

// const appSettings = {
//   oidcSettings: OIDC_SETTINGS,
// };

const container = document.getElementById('webApp');
const root = createRoot(container!);
root.render(<App />);
