import React, { Fragment } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = ({ page, name }) => {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <title>{name}</title>
                <meta data-n-head="true" data-hid="description" name="description" content="ตำนานเทพกรีก-Mythology Greek" />
                <meta data-n-head="true" name="article:author" content="Mythology Greek" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/images/apollo.ico" />
                <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" crossorigin="anonymous"></link>
            </Head>
            {page === "index" ? <Navbar /> : <Sidebar />}
        </Fragment>
    )
}

export default Header
