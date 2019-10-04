import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout>
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">ยินดีต้อนรับสู่ <span className="mobile-block">website ตำนานเทพกรีก</span></small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">หัวข้อที่น่าสนใจ</span>
                                    <div className="animated-info">
                                        <span className="animated-item">ปฐมตำนานแห่งจักรวาล</span>
                                        <span className="animated-item">โอลิมปัส สวรรค์แห่งเทพเจ้า</span>
                                        <span className="animated-item">ตำนานดวงดาวและราศี</span>
                                    </div>
                                </h1>
                                <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="./static/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="svg image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default Home