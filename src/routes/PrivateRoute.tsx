/**
 * Handles private routing for the main application.
 */

import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

type Props = {
  isLoggedIn: boolean,
  path: string,
  component: React.ComponentType<any>,
}

const PrivateRoute: React.StatelessComponent<Props> = ({
  isLoggedIn,
  path,
  component: Component,
}) => {
  if (!isLoggedIn) {
    return <Redirect to='/'/>
  }
  return (
    <Route path={path} render={(props) => (
      <Component {...props} />
    )}/>
  )
}

export default PrivateRoute
