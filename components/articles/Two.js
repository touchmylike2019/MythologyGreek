import Link from 'next/link'

const Two = () => {
    return (
        <li>
            <p className="sidebar-link current">โอลิมปัส สวรรค์แห่งเทพเจ้า</p>
            <ul className="menu-sub">
                <li>
                    <Link href="/articles/olympus/zeus"><a className="section-link" data-scroll="" href="#What-is-Vue-js">
                        เทพเจ้าซุส
                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/dimiter"><a className="section-link" data-scroll="" href="#Getting-Started">
                        เทพีดิมิเทอร์
                                </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/hera"><a className="section-link" data-scroll="" href="#Declarative-Rendering">
                        เทพีเฮรา
                                </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/ares"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพเจ้าแอรีส
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/apollo"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพเจ้าอพอลโล
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/artemis"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพเจ้าอาร์เทมีส
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/hermes"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพเจ้าเฮอร์เมส
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/athena"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพีอธีนา
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/aphrodite"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพีอะโพร์ไดท์
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/hephaestus"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพเจ้าเฮเฟสตัส
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/dionysus"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพเจ้าไดอะไนเซิล
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/poseidon"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        เทพโพไซดอน
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/olympus-to-olympics"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        โอลิมปัสสู่โอลิมปิก
                                    </a></Link>
                </li>
                <li>
                    <Link href="/articles/olympus/atlas"><a className="section-link" data-scroll="" href="#Conditionals-and-Loops">
                        แอตลาสแบกท้องฟ้า
                                    </a></Link>
                </li>
            </ul>
        </li>
    )
}

export default Two