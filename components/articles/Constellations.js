import Link from 'next/link'

export default () => {
    return (
        <div>
            <p className="sidebar-link current">ตำนานกลุ่มดาว</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/constellations/orion">
                        <a className="section-link">
                            กลุ่มดาวนายพราน
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/constellations/taurus">
                        <a className="section-link" >
                            กลุ่มดาววัว
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/constellations/ursa">
                        <a className="section-link" >
                            หมู่ดาวหมีน้อยดาวหมีใหญ่
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/constellations/ophiuchus">
                        <a className="section-link">
                            กลุ่มดาวคนแบกงู
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/constellations/galaxies">
                        <a className="section-link" >
                            ระบบสุริยะกับเทพเจ้า
                        </a>
                    </Link> 
                </li>
            </ul>
        </div>
    )
}
