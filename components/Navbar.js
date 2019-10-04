import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container">
                <Link href="/"><a className="navbar-brand"><img src="../static/poseidon.png" />Mythology greek</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href="/document"><a className="nav-link"><span data-hover="About">เอกสาร</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link"><span data-hover="Projects">เกี่ยวกับ</span></a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar