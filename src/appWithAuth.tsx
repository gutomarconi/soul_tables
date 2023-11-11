// import React, { FC } from 'react';
// import { BrowserRouter } from 'react-router-dom'
// import { MainTemplate } from './components/MainTemplate'
// import { PageContainer } from './components/PageContainer/PageContainer'
// import { Chat } from './features/Chat'
// import { DefaultThemeProvider } from './theme/DefaultThemeProvider'
// import { defaultTheme } from './theme'
// import { SiteHeader } from './components/SideBar'
// import { ConversationsContext, ConversationsProvider } from './features/ConversationsProvider'
// import { TopBar } from './components/TopBar'
// import { TIcons } from './components/Icon'
// import { AuthenticatedApp } from './components/Authentication'
// import { UserManagerSettings } from 'oidc-client-ts';
// import { NEW_CHAT_NAME } from './types/types';

// export const App: FC<{ settings: { oidcSettings: UserManagerSettings }}> = ({ settings }) => {
//   const { oidcSettings } = settings;
//   return (
//     <BrowserRouter>
//       <AuthenticatedApp oidcSettings={oidcSettings}>
//         <DefaultThemeProvider theme={defaultTheme}>
//           <MainTemplate>
//             <NewOrder />
//             <Order />
//             <PendingOrders />
//             </MainTemplate>
//           </ConversationsProvider>
//         </DefaultThemeProvider>
//       </AuthenticatedApp>
//     </BrowserRouter>
//   )
// }
