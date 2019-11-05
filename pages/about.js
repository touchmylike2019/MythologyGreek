import Layout from '../components/Layout'
import { Row, Col, Container } from 'reactstrap'
import content from '../static/images/members/mai.jpg'
import design from '../static/images/members/gift.png'
import fontend from '../static/images/members/arm.jpg'
import Footer from '../components/Footer'

const About = () => {
    return (
        <Layout>
            <Container style={{ marginTop: 150 }}>
                <h3 style={{ textAlign: "center" }}>สมาชิกในกลุ่ม</h3>
                <Row className="mt-5">
                    <Col sm>
                        <img src={content} className="img-about" alt="svg image" />
                        <p className="mt-3" style={{ textAlign: "center" }}>Sirilada Sonsomboon</p>
                        <p style={{ textAlign: "center", color: "#ffc200"}}>Content</p>
                    </Col>
                    <Col sm>
                        <img src={design} className="img-about" alt="svg image" />
                        <p className="mt-3" style={{ textAlign: "center" }}>Oranit Kiripitak</p>
                        <p style={{ textAlign: "center", color: "#ffc200" }}>Design</p>
                    </Col>
                    <Col sm>
                        <img src={fontend} className="img-about" alt="svg image" />
                        <p className="mt-3" style={{ textAlign: "center" }}>Akkrapol Kanpong</p>
                        <p style={{ textAlign: "center", color: "#ffc200" }}>Font-End</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export default About