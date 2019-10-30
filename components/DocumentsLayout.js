import { Container } from 'reactstrap'
import Layout from './Layout'
import Sidebar from './Sidebar'
import ToggleSide from './ToggleSide'

const DocumentsLayout = ({ children }) => {
    return (
        <Layout>
            <Sidebar />
            <Container>
                <div className="content">
                    { children }
                </div>
                <ToggleSide />
            </Container>
        </Layout>
    )
}

export default DocumentsLayout