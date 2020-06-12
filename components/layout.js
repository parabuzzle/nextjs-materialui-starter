import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

export const siteTitle = 'Next Starter'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Next Rocks
            </Typography>
            <Link href="/" passHref>
              <Button color="inherit" component="a">
                Home
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>{children}</Container>
      </React.Fragment>
    </div>
  )
}

export default Layout
