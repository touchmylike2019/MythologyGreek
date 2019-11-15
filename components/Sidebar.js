import React, { useEffect } from 'react'
import Link from 'next/link'
import Primal from './articles/Primal'
import Olympus from './articles/Olympus'
import Ocean from './articles/Ocean'
import Zodiac from './articles/Zodiac'
import Constellations from './articles/Constellations'
import Death from './articles/Death'
import Nature from './articles/Nature'
import God from './articles/God'
import Hero from './articles/Hero'
import Monster from './articles/Monster'

export default ({ value }) => (
    <div className="sidebar mt-3" style={{ display: value ? "block" : "none" }}>
        <div className="sidebar-inner">
            <div className="list">
                <h3>Guide</h3>
                <p className="menu-root">เอกสาร</p>
                <Link href="/document" as={process.env.BACKEND_URL + '/document'}><a className="sidebar-link">Mythology Greek</a></Link>
                <Primal />
                <Olympus />
                <Ocean />
                <Zodiac />
                <Constellations />
                <Death />
                <Nature />
                <God />
                <Hero />
                <Monster />
            </div>
        </div>
    </div>
)
