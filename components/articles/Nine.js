import Link from 'next/link'

const Nine = () => {
    return (
        <li>
            <p className="sidebar-link current">วีรบุรุษ</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/hero/heracles">
                        <a className="section-link" >
                            เฮราคลีส
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/hero/achilles">
                        <a className="section-link" >
                            อคิลลีส
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/hero/perseus">
                        <a className="section-link" >
                            เพอร์ซีอุส
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/hero/oedipus">
                        <a className="section-link" >
                            อีดิปัส
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/hero/theseus">
                        <a className="section-link" >
                            ธีสิอุส
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/hero/bellerophon">
                        <a className="section-link" >
                            เบลเลโรฟอน
                    </a>
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default Nine