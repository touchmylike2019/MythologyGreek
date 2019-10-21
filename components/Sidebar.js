import React, { useState } from 'react'
import Link from 'next/link'

const Sidebar = () => {
    const [toggle, Ontoggle] = useState(false)
    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)
    const [drop4, setDrop4] = useState(false)
    const [drop5, setDrop5] = useState(false)
    const [drop6, setDrop6] = useState(false)
    const [drop7, setDrop7] = useState(false)
    const [drop8, setDrop8] = useState(false)
    return (
        <div className="container">
            <a className="active" onClick={() => Ontoggle(!toggle)}>
                <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
            </a>
            <div style={{ visibility: toggle ? "visible" : "hidden" }} className="sidenav">
                <Link href="/"><a>หน้าหลัก</a></Link>
                <button className="dropdown-btn" onClick={() => setDrop(!drop)}>
                    กำเนิดจักรวาล
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop2(!drop2)}>
                    ดาวเเละราศี
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop2 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop3(!drop3)}>
                    ตำนานเเห่งมหาสมุทร
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop3 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop4(!drop4)}>
                    เทพเจ้ากับธรรมชาติ
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop4 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop5(!drop5)}>
                    มนุษย์
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop5 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop6(!drop6)}>
                    ยทโลก
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop6 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop7(!drop7)}>
                    อสูรกาย + วีรบุรุษ
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop7 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
                <button className="dropdown-btn" onClick={() => setDrop8(!drop8)}>
                    โอลิมปัส
                    <i className="fa fa-caret-down"></i>
                </button>
                <div style={{ display: drop8 ? "block" : "none" }} className="dropdown-container">
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                    <Link href="/"><a>หน้าหลัก</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar