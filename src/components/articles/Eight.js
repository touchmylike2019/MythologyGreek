import Link from 'next/link'

const Eight = () => {
    return (
        <div>
            <p className="sidebar-link current">เทพเจ้ากับมนุษย์</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/godandhuman/hestia">
                        <a className="section-link" >
                            เทพีแห่งเตาไฟผู้คุ้มครองบ้านเรือน
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/godandhuman/cupid">
                        <a className="section-link" >
                            ตำนานความรัก คิวปิดเเละไซคี
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/godandhuman/pandora">
                        <a className="section-link" >
                            ตำนานโลก “กล่องแพนโดร่า” กล่องแห่งหายนะ
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/godandhuman/helen">
                        <a className="section-link" >
                            ตำนานเฮเลนแห่งทรอย
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Eight