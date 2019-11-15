import Layout from '../components/Layout'
import ImageCarousel from '../components/ImageCarousel'
import { Container, Row } from 'reactstrap'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'

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
                                <img src="http://10.0.15.12/wtprojects/wtpg24/static/images/backgound/illustion.webp" className="img-fluid" alt="svg image" />
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

            <div className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">
                            <h2 className="mb-5">Q & A</h2>
                            <Accordion question="ความหมาย ของพระนามของเทพซุส แปลว่าอะไร?" answer="ความสว่างไสวของท้องฟ้า"/>
                            <Accordion question="ในความเชื่อของชาวกรีก เหตุการณ์ใดที่เป็นสาเหตุของการเกิดฤดูหนาว ?" answer="เทพเจา้แห่งฤดูใบไม้ผลิสามารถขึ้นมาจากโลกหลังความตายได้ปีละ3 เดือน"/>
                            <Accordion question="ในการเลือกเทพีที่สวยที่สุด เพราะเหตุใดเทพีอะโฟร์ไดท์ตี้จึงได้เป็นเทพีที่สวยที่สุดเเละใครเป็นคนเลือก ?" answer="เพราะจะได้เฮเลนหญิงสาวที่สวยที่สุดรองจากพรนางมาครอบครอง-ปารีส"/>
                            <Accordion question="เหตุใดเทพเจา้อธีน่าจึงได้รับการยกย่องและบูชามากกว่าเทพเจา้แอริสท้งัที่เป็นเทพเจา้แห่งสงครามเหมือนกัน ?" answer="เทพเจา้อธีน่าใช้สติปัญญาและการวางแผนในการสู้รบ"/>
                            <Accordion question="ความหายนะของกล่องแพนโดร่ามี ความโกรธ  เกลียด ชิงชัง อาฆาตแค้น โรคภัยไข้เจ็บ ความตาย 
ได้ถูกปล่อยออกมาแต่สิ่งสุดท้ายที่ยังไม่ได้ถูกเปิดออกคืออะไร ?" answer="ความสิ้นหวัง มนุษย์จึงยังคงดำรงชีวิตอยู่มาได้ด้วยความหวัง ถึงแม้จะมีอุปสรรคต่างๆ มากมายแค่ไหน ก็ยังมีความหวังเป็นแรงใจสู้อยู่เสมอ"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>

    )
}

export default Home