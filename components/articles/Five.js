const Five = () => {
    return (
        <li>
            <p className="sidebar-link current">ตำนานกลุ่มดาว</p>
            <ul className="menu-sub">
                <li>
                    <a className="section-link" data-scroll="" href="#What-is-Vue-js">
                    กลุ่มดาวนายพราน
                    </a>
                </li>
                <li>
                    <a className="section-link" data-scroll="" href="#Getting-Started">
                    กลุ่มดาววัว
                    </a>
                </li>
                <li>
                    <a className="section-link" data-scroll="" href="#Declarative-Rendering">
                    หมู่ดาวหมีน้อยดาวหมีใหญ่
                    </a>
                </li>
                <li>
                    <a className="section-link" data-scroll="" href="#Declarative-Rendering">
                    กลุ่มดาวคนแบกงู
                    </a>
                </li>
                <li>
                    <a className="section-link" data-scroll="" href="#Declarative-Rendering">
                    ระบบสุริยะกับเทพเจ้า
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default Five