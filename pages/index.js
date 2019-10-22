import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout page="index">
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
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
                                <p className="mt-5">ตำนานเทพเจ้ากรีก เป็นเรื่องปรัมปราที่เกี่ยวข้องกับเทพเจ้า ในศาสนากรีซโบราณ เพื่อเป็นวิถีปฏิบัติทางศาสนา โดยอธิบายถึงการกำเนิดของโลก และการใช้ชีวิต ผ่านการผจญภัยของเหล่าเทพ เทพี วีรบุรุษ และวีรสตรี รวมถึงสิ่งมีชีวิตอื่น ๆ ซึ่งเผยแพร่ผ่านทางบทกวีในแบบปากต่อปาก และกลายเป็นที่รู้จักกันอย่างแพร่หลายในวรรณกรรมกรีก</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="./static/images/dog.jpg" className="img-fluid" alt="svg image" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="bd-example w-100 h-100 mt-5">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="./static/images/dog.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./static/images/dog.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default Home