import Link from 'next/link'

export default () => {
    return (
        <div>
            <p className="sidebar-link current">ความเชื่อในดินแดนปรโลก</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/worldofdeath/hades">
                        <a className="section-link" >
                            ฮาเดส
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/worldofdeath/kingdom">
                    <a className="section-link" >
                        อาณาจักรยมโลก
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/worldofdeath/cerberus">
                    <a className="section-link" >
                        หมาแห่งนรก
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/worldofdeath/moirae">
                    <a className="section-link" >
                        เทพีผู้ปั่นด้ายแห่งโชคชะตา
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/worldofdeath/persephone">
                    <a className="section-link" >
                        ราชินีผู้เลอโฉมแห่งปรโลก
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/worldofdeath/orpheus">
                    <a className="section-link" >
                        เพลงพิณกล่อมยมโลก
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
