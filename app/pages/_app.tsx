import App from 'next/app'
import React from 'react'
import nextRedux, { Store } from '../store/redux-config';
import { Provider } from 'react-redux'
import StoreLayout from '../components/store_layout';

interface StateProps {
  reduxStore: Store
}

class MyApp extends App<StateProps> {

  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <StoreLayout>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </StoreLayout>
    )
  }
}

export default nextRedux(MyApp)
