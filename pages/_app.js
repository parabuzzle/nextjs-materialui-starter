import NextApp from 'next/app'
import React from 'react'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors'
import '../styles/global.css'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
})

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
