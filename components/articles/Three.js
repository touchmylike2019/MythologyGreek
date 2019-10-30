import Link from 'next/link'

const Three = () => {
    return (
        <li>
            <p className="sidebar-link current">ตำนานแห่งมหาสมุทร</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/ocean/godofocean"><a className="section-link" >
                    เทพแห่งมหาสมุทร
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/ocean/siren"><a className="section-link" >
                    ไซเรน เสียงเพลงแห่งมรณะ
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/ocean/charybdis-and-scylla"><a className="section-link" >
                    คาริบดิสและซิลลา สองอสุรีแห่งท้องทะเล
                    </a></Link>
                </li>
            </ul>
        </li>
    )
}

export default Three