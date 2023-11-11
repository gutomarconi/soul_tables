import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { MainTemplate } from './components/MainTemplate'
import { DefaultThemeProvider } from './theme/DefaultThemeProvider'
import { defaultTheme } from './theme'
import { NewOrderContainer } from './features/NewOrder';
import { OrderContainer } from './features/Order';
import { PendingOrdersContainer } from './features/PendingOrders';
// import Home from './features/Home';

export const App: FC = () => {
  return (
    <Router>
      <DefaultThemeProvider theme={defaultTheme}>
        <MainTemplate>
          <Switch>
            <Route key='new-order' exact path='/order/create' component={NewOrderContainer} />
            <Route key='pending-orders' exact path='/pending-orders' component={PendingOrdersContainer} />
            <Route key='edit-order' exact path='/order/:id/edit' component={OrderContainer} />
            <Route key='home' exact path='/' component={() => <Redirect to='/pending-orders' />} />
          </Switch>
        </MainTemplate>
      </DefaultThemeProvider>
    </Router>
  )
}
