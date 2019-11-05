import Link from 'next/link'

const Seven = () => {
    return (
        <li>
            <p className="sidebar-link current">เทพเจ้ากับการเกิดธรรมชาติ</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/nature/flower">
                        <a className="section-link" >
                            ดอกไม้จากตำนานเทพเจ้ากรีก
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/nature/echo">
                        <a className="section-link" >
                            เอคโค่
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/nature/crown">
                        <a className="section-link" >
                            ลอเรลมงกุฏของอพอลโล
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/nature/delphi">
                        <a className="section-link" >
                            น้ำพุที่เดลฟี
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/nature/arachna">
                        <a className="section-link" >
                            กำเนิดแมงมุม อารัคเน่
                    </a>
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default Seven