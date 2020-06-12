import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Layout, { siteTitle } from '../components/layout'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Next Starter UI</h1>
      <div className={classes.root}>
        <Link
          href="https://github.com/parabuzzle/nextjs-materialui-starter"
          passHref
        >
          <Button variant="contained" color="primary" component="a">
            Fork on Github
          </Button>
        </Link>
        <Link href="https://nextjs.org/learn/basics/create-nextjs-app" passHref>
          <Button variant="contained" color="primary" component="a">
            Next Basics
          </Button>
        </Link>
      </div>
    </Layout>
  )
}
