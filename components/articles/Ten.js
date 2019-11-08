import Link from 'next/link'

const Ten = () => {
    return (
        <div>
            <p className="sidebar-link current">อสูรกาย</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/monster/typhon">
                        <a className="section-link" >
                            ไทฟอน
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/monster/sphinx">
                        <a className="section-link" >
                            สฟริงซ์
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/monster/hydra">
                        <a className="section-link" >
                            ไฮดรา
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/monster/chimera">
                        <a className="section-link" >
                            ไคเมร่า
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/monster/lycaon">
                        <a className="section-link" >
                            ไลคาอัน
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/monster/medusa">
                        <a className="section-link" >
                            เมดูซ่า
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Ten