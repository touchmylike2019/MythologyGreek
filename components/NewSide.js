import Link from 'next/link'
import One from './articles/One'
import Two from './articles/Two'
import Three from './articles/Three'
import Four from './articles/Four'
import Five from './articles/Five'
import Six from './articles/Six'
import Seven from './articles/Seven'
import Eight from './articles/Eight'
import Nine from './articles/Nine'
import Ten from './articles/Ten'

const NewSide = () => {
    return (
        <div id="main" className="fix-sidebar">
            <div className="sidebar mt-3">
                <div className="sidebar-inner">
                    <div className="list">
                        <h3>Guide</h3>
                        <ul className="menu-root">
                            <li>เอกสาร</li>
                        </ul>
                        <li>
                            <Link href="/document"><a className="sidebar-link">Mythology Greek</a></Link>
                        </li>
                        <One />
                        <Two />
                        <Three />
                        <Four />
                        <Five />
                        <Six />
                        <Seven />
                        <Eight />
                        <Nine />
                        <Ten />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewSide