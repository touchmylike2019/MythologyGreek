import React, { Fragment } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Header = ({ name }) => {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <title>{name}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/images/apollo.ico" />
                <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
        </Fragment>
    )
}

export default Header
