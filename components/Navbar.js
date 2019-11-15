import React, { useState } from 'react'
import Link from 'next/link'

export default () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const logo = host + "/logo/logo-center.png"
    const [active, isActive] = useState(false)
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
            <div className="container">
                <Link href="/" as={process.env.BACKEND_URL + '/'}><a className="navbar-brand"><img src={logo} />Mythology greek</a></Link>
                <button onClick={() => isActive(!active)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={String(active)}
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={active === false ? "collapse navbar-collapse" : "collapse navbar-collapse show"}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/" as={process.env.BACKEND_URL + '/'} ><a className="nav-link"><span data-hover="About">หน้าหลัก</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/document" as={process.env.BACKEND_URL + '/document'} ><a className="nav-link"><span data-hover="About">เอกสาร</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" as={process.env.BACKEND_URL + '/about'} ><a className="nav-link"><span data-hover="Projects">เกี่ยวกับ</span></a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
