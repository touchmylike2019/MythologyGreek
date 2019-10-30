import Link from "next/link"

const One = () => {
    return (
        <li>
            <p className="sidebar-link current">ปฐมตำนานแห่งจักรวาล</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/primal-universe/emptiness"><a className="section-link" >
                        เทพเจ้าแห่งความว่างเปล่า
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/primal-universe/groundandsky"><a className="section-link" >
                        พื้นดินและท้องฟ้า
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/primal-universe/titan"><a className="section-link">
                        ไททัน
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/primal-universe/birthgods"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        กำเนิดราชาแห่งทวยเทพ
                    </a></Link>
                </li>
            </ul>
        </li>
    )
}

export default One