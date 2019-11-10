import Link from 'next/link'

const Four = () => {
    return (
        <div>
            <p className="sidebar-link current">ตำนานราศี</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/zodiac/capricorn"><a className="section-link">
                        ราศีมังกร
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/apuarius"><a className="section-link" >
                        ราศีกุมภ์
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/pisces"><a className="section-link" >
                        ราศีมีน
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/aries"><a className="section-link" >
                        ราศีเมษ
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/taurus"><a className="section-link" >
                        ราศีพฤกษภ
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/gemini"><a className="section-link" >
                        ราศีเมถุน
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/cancer"><a className="section-link" >
                        ราศีกรกฎ
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/leo"><a className="section-link" >
                        ราศีสิงห์
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/virgo"><a className="section-link" >
                        ราศีกันย์
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/libra"><a className="section-link" >
                        ราศีตุลย์
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/scorpio"><a className="section-link" >
                        ราศีพิจิก
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/zodiac/sagittarius"><a className="section-link" >
                        ราศีธนู
                    </a></Link>
                </li>
            </ul>
        </div>
    )
}

export default Four