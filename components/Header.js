import React, { Fragment } from 'react'
import Head from 'next/head'

const Header = ({ name }) => {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <title>{name}</title>
                <meta data-n-head="true" data-hid="description" name="description" content="ตำนานเทพกรีก-Mythology Greek" />
                <meta data-n-head="true" name="article:author" content="Mythology Greek" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/images/apollo.ico" />
                {/* <link rel="stylesheet" href="/static/css/page.css"/> */}
                <link href="https://fonts.googleapis.com/css?family=Mali&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" crossorigin="anonymous" />
            </Head>
        </Fragment>
    )
}

export default Header
