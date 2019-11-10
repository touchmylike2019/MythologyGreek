import Layout from '../components/Layout'
import ImageCarousel from '../components/ImageCarousel'
import { Container, Row } from 'reactstrap'
import Footer from '../components/Footer'

const Home = () => {

    return (
        <Layout>
            <div className="about full-screen d-lg-flex justify-content-center align-items-center">
                <Container>
                    <Row>
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">ยินดีต้อนรับสู่เว็ปไซต์ <span className="mobile-block">ตำนานเทพกรีก - Mythology Greek</span></small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">หัวข้อที่น่าสนใจ</span>
                                    <div className="animated-info">
                                        <span className="animated-item">ปฐมตำนานแห่งจักรวาล</span>
                                        <span className="animated-item">โอลิมปัส สวรรค์แห่งเทพเจ้า</span>
                                        <span className="animated-item">ตำนานดวงดาวและราศี</span>
                                    </div>
                                </h1>
                                <p className="mt-5">ตำนานกรีกเกี่ยวข้องกับศาสนากรีกโบราณ โดยอธิบายถึงการกำเนิดของโลก และการใช้ชีวิต ผ่านการผจญภัยของเหล่าเทพ เทพี วีรบุรุษ และวีรสตรี รวมถึงสิ่งมีชีวิตอื่น ๆ ซึ่งเผยแพร่ผ่านทางบทกวี</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="https://colorlib.com/preview/theme/edumark/img/banner/edu_ilastration.png" className="img-fluid" alt="svg image" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">
                            <h2>เนื้อเรื่องที่น่าสนใจ</h2>
                            <ImageCarousel />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>

    )
}

export default Home