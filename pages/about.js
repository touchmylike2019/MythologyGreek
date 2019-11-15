import Layout from '../components/Layout'
import { Row, Col, Container } from 'reactstrap'
import Footer from '../components/Footer'
import content from "../assets/members/mai.jpg"
import design from "../assets/members/gift.jpg"
import fontend from "../assets/members/arm.jpg"

const About = () => {
    return (
        <Layout>
            <Container className="about-page" style={{ marginTop: 150 }}>
                <h3 style={{ textAlign: "center", color: "#ffc200" }}>Mythology Greek</h3>
                <h3 style={{ textAlign: "center" }}>สมาชิกในกลุ่ม</h3>
                <Row className="mt-5">
                    <Col sm>
                        <figure className="snip1104">
                            <img src={content} alt="content" />
                            <figcaption>
                                <h2>Content</h2>
                            </figcaption>
                        </figure>
                        <p className="mt-3" style={{ textAlign: "center" }}>Sirilada Sonsomboon</p>
                        <p className="mt-3" style={{ textAlign: "center", fontSize: 30 }}><a href="https://github.com/MsrdMai"><i className="fab fa-github" /></a></p>
                    </Col>
                    <Col sm>
                        <figure className="snip1104"><img src={design} alt="sample35" />
                            <figcaption>
                                <h2>Design</h2>
                            </figcaption>
                        </figure>
                        <p className="mt-3" style={{ textAlign: "center" }}>Oranit Kiripitak</p>
                        <p className="mt-3" style={{ textAlign: "center", fontSize: 30 }}><a href="https://github.com/Tearrockster"><i className="fab fa-github" /></a></p>
                    </Col>
                    <Col sm>
                        <figure className="snip1104"><img src={fontend} alt="sample35" />
                            <figcaption>
                                <h2>Font-End</h2>
                            </figcaption>
                        </figure>
                        <p className="mt-3" style={{ textAlign: "center" }}>Akkrapol Kanpong</p>
                        <p className="mt-3" style={{ textAlign: "center", fontSize: 30 }}><a href="https://github.com/touchmylike2019" ><i className="fab fa-github" /></a></p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export default About