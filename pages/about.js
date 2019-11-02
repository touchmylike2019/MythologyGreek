import Layout from '../components/Layout'
import { Row, Col, Container } from 'reactstrap'
import Footer from '../components/Footer'

const About = () => {
    return (
        <Layout>
            <Container style={{ marginTop: 150 }}>
                <h3 style={{ textAlign: "center" }}>สมาชิกในกลุ่ม</h3>
                <Row className="mt-5">
                    <Col sm>
                        <img src="/static/images/documents/1.jpg" className="img-about" alt="svg image" />
                        <p className="mt-3" style={{ textAlign: "center" }}>Sirilada Sonsomboon</p>
                        <p style={{ textAlign: "center" }}>Content</p>
                    </Col>
                    <Col sm>
                        <img src="/static/images/documents/2.jpg" className="img-about" alt="svg image" />
                        <p className="mt-3" style={{ textAlign: "center" }}>Oranit Kiripitak</p>
                        <p style={{ textAlign: "center" }}>Design</p>
                    </Col>
                    <Col sm>
                        <img src="/static/images/documents/3.jpg" className="img-about" alt="svg image" />
                        <p className="mt-3" style={{ textAlign: "center" }}>Akkrapol Kanpong</p>
                        <p style={{ textAlign: "center" }}>Font-End</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export default About