import React, { useEffect } from 'react'


import Link from 'next/link'
import One from './articles/One'
import Two from './articles/Two'
import Three from './articles/Three'
import Four from './articles/Four'
import Five from './articles/Five'
import Six from './articles/Six'
import Seven from './articles/Seven'
import Eight from './articles/Eight'
import Nine from './articles/Nine'
import Ten from './articles/Ten'

const Sidebar = ({ value }) => {

    return (
        <div className="sidebar mt-3" style={{ display: value ? "block" : "none" }}>
            <div className="sidebar-inner">
                <div className="list">
                    <h3>Guide</h3>
                    <p className="menu-root">เอกสาร</p>
                    <Link href="/document"><a className="sidebar-link">Mythology Greek</a></Link>
                    <One />
                    <Two />
                    <Three />
                    <Four />
                    <Five />
                    <Six />
                    <Seven />
                    <Eight />
                    <Nine />
                    <Ten />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
