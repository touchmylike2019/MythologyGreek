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
                <link rel="icon" href="/static/apollo.ico" />
                <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet" />
                <script src="./static/jquery-3.3.1.min.js"></script>
                <script src="./static/popper.min.js"></script>
                <script src="./static/bootstrap.min.js"></script>
                <script src="./static/Headroom.js"></script>
                <script src="./static/jQuery.headroom.js"></script>
                <script src="./static/custom.js"></script>
                <script src="./static/owl.carousel.min.js"></script>
                <script src="./static/smoothscroll.js"></script>
            </Head>
            <Navbar />
        </Fragment>
    )
}

export default Header
