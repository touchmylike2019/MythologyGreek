import React, { useState } from 'react'
import { Container } from 'reactstrap'
import Layout from './Layout'
import Sidebar from './Sidebar'
import Sidebar2 from './Sidebar2'
import ToggleSide from './ToggleSide'

const DocumentsLayout = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <Layout>
            <Sidebar value={toggle}/>
            <Sidebar2 /> 
            <Container>
                <div className="content">
                    { children }
                </div>
                <ToggleSide value={toggle} setToggle={setToggle}/>
            </Container>
        </Layout>
    )
}

export default DocumentsLayout